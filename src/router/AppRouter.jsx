import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PrivateRouter } from './PrivateRouter'
import AdminRouter from '../admin/router/AdminRouter'
import VentasRouter from '../ventas/router/VentasRouter'
import ReportRouter from '../report/router/ReportRouter'
import AuthPage from '../auth/pages/AuthPage'



export default function AppRouter() {
    
    return (
            <BrowserRouter>
                <Routes>

                    <Route path='/login' element={<AuthPage/>}></Route>
                    <Route path='/administracion/*' element={<PrivateRouter><AdminRouter/></PrivateRouter>}/>
                    <Route path='/ventas/*' element={<PrivateRouter><VentasRouter/></PrivateRouter>}/>
                    <Route path='/report/*' element={<PrivateRouter><ReportRouter/></PrivateRouter>}/>

                </Routes>
            </BrowserRouter>


    )
}
