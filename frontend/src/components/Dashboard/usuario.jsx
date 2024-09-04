import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    fetchUsuarios,
    fetchUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
} from '../../service/usuarioService';
import {
    FormContainer,
    Input,
    Button,
    UserList,
    UserItem,
    Notification,
    SectionTitle
} from './stylesDashboard/stylesUsuario';

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({ nombre: '', appat: '', apmat: '', estado: '' });
    const [editing, setEditing] = useState(false);
    const [notification, setNotification] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUsuarios();
    }, []);

    useEffect(() => {
        if (id) {
            loadUsuario(id);
        } else {
            setUsuario({ nombre: '', appat: '', apmat: '', estado: '' });
            setEditing(false);
        }
    }, [id]);

    const loadUsuarios = async () => {
        try {
            const data = await fetchUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            setNotification('Error al cargar los usuarios.');
        }
    };

    const loadUsuario = async (userId) => {
        try {
            const data = await fetchUsuario(userId);
            setUsuario(data);
            setEditing(true);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            setNotification('Error al cargar el usuario.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editing) {
                await updateUsuario(id, usuario);
                setNotification('Usuario actualizado correctamente.');
            } else {
                await createUsuario(usuario);
                setNotification('Usuario creado correctamente.');
            }
            loadUsuarios();
            setUsuario({ nombre: '', appat: '', apmat: '', estado: '' });
            setEditing(false);
            navigate('/usuarios');
        } catch (error) {
            console.error(editing ? 'Error al actualizar el usuario:' : 'Error al crear el usuario:', error);
            setNotification(editing ? 'Error al actualizar el usuario.' : 'Error al crear el usuario.');
        } finally {
            setTimeout(() => setNotification(''), 3000);
        }
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUsuario(userId);
            setUsuarios(usuarios.filter(user => user.id !== userId));
            setNotification('Usuario eliminado correctamente.');
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            setNotification('Error al eliminar el usuario.');
        } finally {
            setTimeout(() => setNotification(''), 3000);
        }
    };

    return (
        <FormContainer>
            <SectionTitle>Gestión de Usuarios</SectionTitle>

            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="appat"
                    placeholder="Apellido Paterno"
                    value={usuario.appat}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="apmat"
                    placeholder="Apellido Materno"
                    value={usuario.apmat}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="estado"
                    placeholder="Estado"
                    value={usuario.estado}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">{editing ? 'Actualizar Usuario' : 'Crear Usuario'}</Button>
                {editing && (
                    <Button onClick={() => {
                        setUsuario({ nombre: '', appat: '', apmat: '', estado: '' });
                        setEditing(false);
                        navigate('/usuarios');
                    }}>Cancelar Edición</Button>
                )}
            </form>

            <SectionTitle>Lista de Usuarios</SectionTitle>
            <UserList>
                {usuarios.map(user => (
                    <UserItem key={user.id}>
                        {user.nombre} {user.appat} {user.apmat} - {user.estado}
                        <Button onClick={() => navigate(`/usuarios/${user.id}`)}>Editar</Button>
                        <Button onClick={() => handleDelete(user.id)}>Eliminar</Button>
                    </UserItem>
                ))}
            </UserList>

            {notification && <Notification>{notification}</Notification>}
        </FormContainer>
    );
};

export default Usuario;