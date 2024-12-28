import { Route, Routes } from "react-router";
import Layout from "../../components/Layout/Layout";
import ClientesPages from "../pages/ClientesPages";

export default function VentasRouter() {
    return (
        <Layout>
            <Routes>
                <Route path='/clientes' element={<ClientesPages />}></Route>

            </Routes>
        </Layout>
    )
}
