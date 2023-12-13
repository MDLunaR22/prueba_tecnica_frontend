import { useEffect, useState } from "react"
import {deleteMonedas, getMonedas} from "../Api/MonedaApi"
import { useNavigate } from "react-router-dom";
 
export const EditTasaCambio = () => {

    const navigate = useNavigate();
    const [register, setRegister] = useState([]);

    const load = async () => {
        const resultado = await getMonedas();
        setRegister(resultado)
    }

    const onClick = (edit, id) => {
        localStorage.setItem("show", edit);
        edit == 1 ? localStorage.setItem('id', id) : localStorage.setItem('id', null)
        navigate('/show/tc/edit');
        
    }

    const deleteMoneda = async (id) => {
        await deleteMonedas(id);
    }

    useEffect(() => {
        load();
    }, []);

    return(
        <>
            <div>
                <button className="btn btn-success" onClick={() => onClick(0)}>Agregar moneda</button>
            </div>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Moneda</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Fecha Actualizacion</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
            {register.map( moneda => {
                let scope = 0;
                scope++;
                const date = new Date(moneda.fecha)
                return(
                    <tr key={moneda._id}>
                        <th scope="row">{scope}</th>
                        <td>{moneda.nombreMoneda}</td>
                        <td>{moneda.valor}</td>
                        <td>{date.toLocaleDateString()}</td>
                        <td>
                            <button className="btn btn-warning w-25 me-1 ms-1" onClick={() => onClick(1, moneda._id)}>Editar</button>
                            <button className="btn btn-danger w-25 m-1 me-1 ms-1" onClick={() => deleteMoneda(moneda._id)}>Eliminar</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>                        
                </table> 
        </>
    )
}