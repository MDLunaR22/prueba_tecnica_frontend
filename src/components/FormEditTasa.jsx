import { useEffect, useState } from 'react'
import { getMonedaById, updateMonedas, addMonedas } from '../Api/MonedaApi'
import { useNavigate } from 'react-router-dom';

export const FormEditTasa = () => {
    const id = localStorage.getItem('id');
    let show = localStorage.getItem('show');

    const navigate = useNavigate();

    const [register, setRegister] = useState({ nombreMoneda: '', valor: '', fecha: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let resultado
        show == 0 ? resultado = await addMonedas(register.nombreMoneda, register.valor, register.fecha) : resultado = await updateMonedas(id, register.nombreMoneda, register.valor, register.fecha)
        resultado != null ? navigate('/show/tc') : null
    }

    const load = async () => {
        let resultado
        id == "null" ? null : resultado = await getMonedaById(id);
        setRegister({nombreMoneda: resultado.nombreMoneda, valor: resultado.valor, fecha: resultado.fecha});
    };

    const fecha = () => {
        return `${new Date(register.fecha).getFullYear()} - ${new Date(register.fecha).getMonth()} - ${new Date(register.fecha).getDay()}`
    }

    useEffect(() => {
        load();
    },[])

    console.log(register.valor);
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Moneda</label>
                <input onChange={(e) => { setRegister({ nombreMoneda: e.target.value }) }} type="text" className="form-control" defaultValue={register.nombreMoneda} />
                <div className="form-text">Colocar la abreviacion del tipo de moneda ej: dolar (USD)</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Valor</label>
                <input onChange={(e) => { setRegister({ valor: e.target.value }) }} type="number" step='any' className="form-control" defaultValue={register.valor} />
                <div className="form-text">Colocar la tasa de cambio entre la moneda que coloco y el colon costarricense</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">fecha</label>
                <input onChange={(e) => { setRegister({ fecha: e.target.value }) }} type="date" className="form-control" id="exampleInputPassword1" defaultValue={fecha} />
                <div id="emailHelp" className="form-text">Colocar la actualizacion de la moneda</div>
            </div>
            <button type="submit" className="btn btn-primary mb-5">Guardar</button>
        </form>
    )
}