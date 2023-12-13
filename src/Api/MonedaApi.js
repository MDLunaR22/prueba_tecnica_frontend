import axios from 'axios'

const URL = 'http://127.0.0.1:3000';

export const getMonedas = async () => {
    try {
        const {data : {monedas}} = await axios.get(`${URL}/api/moneda/`);
        return monedas;
    } catch (error) {
        console.log(error)
    }
}

export const getMonedaById = async (id) => {
    try {
        const {data : {moneda}} = await axios.get(`${URL}/api/moneda/${id}`);
        return moneda;
    } catch (error) {
        console.log(error)
    }
}

export const addMonedas = async (nombreMoneda, valor, fecha) => {
    try {
        const resultado = await axios.post(`${URL}/api/moneda/add`, {nombreMoneda, valor, fecha});
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

export const updateMonedas = async (id, nombreMoneda, valor, fecha) => {
    try {
        const resultado = await axios.put(`${URL}/api/moneda/edit/${id}`, {nombreMoneda, valor, fecha})
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

export const deleteMonedas = async (id) => {
    try {
        const resultado = await axios.delete(`${URL}/api/moneda/delete/${id}`)
        return resultado || true;
    } catch (error) {
        console.log(error);
    }
}