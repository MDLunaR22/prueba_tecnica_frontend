import {Link} from 'react-router-dom'
import { TableTasaDeCambio } from './TableTasaDeCambio'

export const Menu = () => {
    return(
    <div className='col-3 m-5'>
        <Link className="btn btn-link" to={'/tc'}>Tasa de Cambio</Link>
        <Link className="btn btn-link" to={'/show/tc'} >Edicion de tasa de cambio</Link>
    </div>
    )
}