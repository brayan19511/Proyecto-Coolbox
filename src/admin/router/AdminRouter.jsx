import { Navigate, Route, Routes } from 'react-router'
import FacturacionPage from '../pages/FacturacionPage'
import Layout from '../../components/Layout/Layout'
import CxCPage from '../pages/CxCPage'

export default function AdminRouter() {
    return (
        <Layout>

            <Routes>
                {/* <Route path='/ss' element={<FacturacionPage />}></Route> */}
                <Route path='/facturas' element={<FacturacionPage />}></Route>
                <Route path='/cxc' element={<CxCPage />}></Route>
                {/* <Route path='/*' element={<Navigate to={'/facturas'} />}></Route> */}


            </Routes>
        </Layout>
    )
}
