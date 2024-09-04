const API_URL = 'http://localhost:5000/api/predios'; 

export const fetchPredios = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error al obtener predios');
    }
    return response.json();
};

export const fetchPredio = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el predio');
    }
    return response.json();
};

export const createPredio = async (predio) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predio)
    });
    if (!response.ok) {
        throw new Error('Error al crear el predio');
    }
    return response.json();
};

export const updatePredio = async (id, predio) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predio)
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el predio');
    }
    return response.json();
};

export const deletePredio = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el predio');
    }
    return response.json();
};
