import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    fetchPredios,
    fetchPredio,
    createPredio,
    updatePredio,
    deletePredio
} from '../../service/predioService';
import {
    PredioFormContainer as FormContainer,
    PredioInput as Input,
    PredioButton as Button,
    PredioList,
    PredioItem,
    PredioNotification as Notification,
    PredioSectionTitle as SectionTitle
} from './stylesDashboard/stylePredio';

const Predio = () => {
    const [predios, setPredios] = useState([]);
    const [predio, setPredio] = useState({
        IdPredio: '',
        IDTP: '',
        SubD: '',
        Manzano: '',
        Predio: '',
        TipoPredio: '',
        Bloque: '',
        UnidadCat: '',
        Superficie: '',
        Estado: '',
        FechaAprobacion: '',
        DocumentoAprobador: '',
        FechaDocumentoAprobador: '',
        Ruta: ''
    });
    const [editing, setEditing] = useState(false);
    const [notification, setNotification] = useState('');
    const [file, setFile] = useState(null); // Para manejar el archivo
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadPredios();
    }, []);

    useEffect(() => {
        if (id) {
            loadPredio(id);
        } else {
            setPredio({
                IdPredio: '',
                IDTP: '',
                SubD: '',
                Manzano: '',
                Predio: '',
                TipoPredio: '',
                Bloque: '',
                UnidadCat: '',
                Superficie: '',
                Estado: '',
                FechaAprobacion: '',
                DocumentoAprobador: '',
                FechaDocumentoAprobador: '',
                Ruta: ''
            });
            setFile(null);
            setEditing(false);
        }
    }, [id]);

    const loadPredios = async () => {
        try {
            const data = await fetchPredios();
            setPredios(data);
        } catch (error) {
            console.error('Error al obtener predios:', error);
            setNotification('Error al cargar los predios.');
        }
    };

    const loadPredio = async (predioId) => {
        try {
            const data = await fetchPredio(predioId);
            setPredio(data);
            setEditing(true);
        } catch (error) {
            console.error('Error al obtener el predio:', error);
            setNotification('Error al cargar el predio.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPredio({ ...predio, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Solo un archivo por ahora
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('IdPredio', predio.IdPredio);
        formData.append('IDTP', predio.IDTP);
        formData.append('SubD', predio.SubD);
        formData.append('Manzano', predio.Manzano);
        formData.append('Predio', predio.Predio);
        formData.append('TipoPredio', predio.TipoPredio);
        formData.append('Bloque', predio.Bloque);
        formData.append('UnidadCat', predio.UnidadCat);
        formData.append('Superficie', predio.Superficie);
        formData.append('Estado', predio.Estado);
        formData.append('FechaAprobacion', predio.FechaAprobacion);
        formData.append('DocumentoAprobador', predio.DocumentoAprobador);
        formData.append('FechaDocumentoAprobador', predio.FechaDocumentoAprobador);
        if (file) {
            formData.append('ruta', file);
        }

        try {
            if (editing) {
                await updatePredio(id, formData);
                setNotification('Predio actualizado correctamente.');
            } else {
                await createPredio(formData);
                setNotification('Predio creado correctamente.');
            }
            loadPredios();
            setEditing(false);
            navigate('/predios');
        } catch (error) {
            console.error(editing ? 'Error al actualizar el predio:' : 'Error al crear el predio:', error);
            setNotification(editing ? 'Error al actualizar el predio.' : 'Error al crear el predio.');
        } finally {
            setTimeout(() => setNotification(''), 3000);
        }
    };

    const handleDelete = async (predioId) => {
        try {
            await deletePredio(predioId);
            setPredios(predios.filter(p => p.IdPredio !== predioId));
            setNotification('Predio eliminado correctamente.');
        } catch (error) {
            console.error('Error al eliminar el predio:', error);
            setNotification('Error al eliminar el predio.');
        } finally {
            setTimeout(() => setNotification(''), 3000);
        }
    };

    return (
        <FormContainer>
            <SectionTitle>Gestión de Predios</SectionTitle>

            <form onSubmit={handleSubmit}>
                {/*<Input type="text" name="IdPredio" placeholder="ID Predio" value={predio.IdPredio} onChange={handleChange} required />*/}
                <Input type="text" name="IDTP" placeholder="IDTP" value={predio.IDTP} onChange={handleChange} required />
                <Input type="text" name="SubD" placeholder="SubD" value={predio.SubD} onChange={handleChange} />
                <Input type="text" name="Manzano" placeholder="Manzano" value={predio.Manzano} onChange={handleChange} />
                <Input type="text" name="Predio" placeholder="Predio" value={predio.Predio} onChange={handleChange} />
                <Input type="text" name="TipoPredio" placeholder="Tipo de Predio" value={predio.TipoPredio} onChange={handleChange} />
                <Input type="text" name="Bloque" placeholder="Bloque" value={predio.Bloque} onChange={handleChange} />
                <Input type="text" name="UnidadCat" placeholder="Unidad Cat" value={predio.UnidadCat} onChange={handleChange} />
                <Input type="text" name="Superficie" placeholder="Superficie" value={predio.Superficie} onChange={handleChange} />
                <Input type="text" name="Estado" placeholder="Estado" value={predio.Estado} onChange={handleChange} />
                <Input type="date" name="FechaAprobacion" placeholder="Fecha de Aprobación" value={predio.FechaAprobacion} onChange={handleChange} />
                <Input type="text" name="DocumentoAprobador" placeholder="Documento Aprobador" value={predio.DocumentoAprobador} onChange={handleChange} />
                <Input type="date" name="FechaDocumentoAprobador" placeholder="Fecha de Documento Aprobador" value={predio.FechaDocumentoAprobador} onChange={handleChange} />

                <Input type="file" name="ruta" onChange={handleFileChange} />

                <Button type="submit">{editing ? 'Actualizar' : 'Crear'} Predio</Button>
            </form>

            {notification && <Notification>{notification}</Notification>}

            <PredioList>
                {predios.map(p => (
                    <PredioItem key={p.IdPredio}>
                        {p.Predio} <Button onClick={() => handleDelete(p.IdPredio)}>Eliminar</Button>
                        <Button onClick={() => navigate(`/predios/${p.IdPredio}`)}>Editar</Button>
                    </PredioItem>
                ))}
            </PredioList>
        </FormContainer>
    );
};

export default Predio;
