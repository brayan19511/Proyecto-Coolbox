import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminPage from '../pages/admin/AdminPage'
import VentasPage from '../pages/ventas/VentasPage'
import ReportPage from '../pages/report/ReportPage'
import AuthPage from '../pages/Auth/AuthPage'







export default function AppRouter() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AuthPage/>}></Route>
                    <Route path='administracion' element={<AdminPage/>}/>
                    <Route path='ventas' element={<VentasPage/>}/>
                    <Route path='report' element={<ReportPage/>}/>

                </Routes>
            </BrowserRouter>


    )
}
