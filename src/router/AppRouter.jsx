import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AdminRouter from '../admin/router/AdminRouter'
import VentasRouter from '../ventas/router/VentasRouter'
import ReportRouter from '../report/router/ReportRouter'
import AuthPage from '../auth/pages/AuthPage'







export default function AppRouter() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<AuthPage/>}></Route>
                    <Route path='/administracion/*' element={<AdminRouter/>}/>
                    <Route path='/ventas/*' element={<VentasRouter/>}/>
                    <Route path='/report/*' element={<ReportRouter/>}/>

                </Routes>
            </BrowserRouter>


    )
}
