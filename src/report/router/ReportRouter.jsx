import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Route, Routes } from 'react-router'
import CxCPages from '../pages/CxCPages'

export default function ReportRouter() {
    return (
        <Layout>
            <Routes>
                <Route path='/cxc' element={<CxCPages />}></Route>

            </Routes>
        </Layout>
    )
}
