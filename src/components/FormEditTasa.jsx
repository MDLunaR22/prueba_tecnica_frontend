import { useEffect, useState } from 'react'
import { getMonedaById, updateMonedas, addMonedas } from '../Api/MonedaApi'
import { useNavigate } from 'react-router-dom';

export const FormEditTasa = () => {
    const id = localStorage.getItem('id');
    let show = localStorage.getItem('show');

    const navigate = useNavigate();

    const [nombreMoneda, setNombreMoneda] = useState('');
    const [valor, setValor] = useState('');
    const [fecha, setFecha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        let resultado
        show == 0 ? resultado = await addMonedas(nombreMoneda, valor, fecha) : resultado = await updateMonedas(id, nombreMoneda, valor, fecha)
        resultado != null ? navigate('/show/tc') : null
    }

    const load = async () => {
        let resultado
        id == "null" ? null : resultado = await getMonedaById(id);
        setNombreMoneda(resultado.nombreMoneda)
        setValor(resultado.valor)
        setFecha(resultado.fecha);
    };

    const fecha2 = () => {
        return `${new Date(fecha).getFullYear()} - ${new Date(fecha).getMonth()} - ${new Date(fecha).getDay()}`
    }

    useEffect(() => {
        load();
    },[])

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Moneda</label>
                <input onChange={(e) => { setNombreMoneda(e.target.value ) }} type="text" className="form-control" defaultValue={nombreMoneda} />
                <div className="form-text">Colocar la abreviación del tipo de moneda ej: dólar (USD)</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Valor</label>
                <input onChange={(e) => { setValor( e.target.value ) }} type="number" step='any' className="form-control" defaultValue={valor} />
                <div className="form-text">Colocar la tasa de cambio entre la moneda que coloco y el colon costarricense</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">fecha</label>
                <input onChange={(e) => { setFecha( e.target.value ) }} type="date" className="form-control" id="exampleInputPassword1" defaultValue={fecha2} />
                <div id="emailHelp" className="form-text">Colocar la actualización de la moneda</div>
            </div>
            <button type="submit" className="btn btn-primary mb-5">Guardar</button>
        </form>
    )
}