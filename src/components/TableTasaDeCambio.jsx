import { useEffect, useState } from "react"
import { getMonedas } from "../Api/MonedaApi";

export const TableTasaDeCambio = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <select className="form-select">
                        <option defaultValue='0'>Open this select menu</option>
                        <option value="1">USD</option>
                        <option value="2">GTQ</option>
                        <option value="3">EUR</option>
                    </select>
                    <div className="mt-2">
                        <label className="form-label">Cantidad</label>
                        <input type="number" step='any' className="form-control" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="mt-2">
                        <label className="form-label">Cantidad Colón Costarricense</label>
                        <input type="number" className="form-control" disabled value={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}