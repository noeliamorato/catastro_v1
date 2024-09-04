const API_URL = 'http://localhost:70126/Usuarios'; // Cambiar por la de sebas

export const fetchUsuarios = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error al obtener usuarios');
    }
    return response.json();
};

export const fetchUsuario = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
    }
    return response.json();
};

export const createUsuario = async (usuario) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    if (!response.ok) {
        throw new Error('Error al crear el usuario');
    }
    return response.json();
};

export const updateUsuario = async (id, usuario) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
    }
    return response.json();
};

export const deleteUsuario = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
    }
};
