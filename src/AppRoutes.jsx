import { Navigate, Route, Routes } from "react-router-dom"
import { TableTasaDeCambio } from "./components/TableTasaDeCambio"
import { EditTasaCambio } from "./components/EditTasaCambio"
import { FormEditTasa } from "./components/FormEditTasa"

export const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<Navigate to={'tc'} />} />
        <Route path="tc" element={<TableTasaDeCambio />}/>
        <Route path="show/tc">
            <Route path="" element={<EditTasaCambio/>} />
            <Route path="edit" element={<FormEditTasa />}/>
        </Route>
        <Route path="/*" element={<Navigate to={'/'} />}/>
    </Routes> 
    )
}