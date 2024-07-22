import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Head from "./components/header";

function Layout() {
    return (
        <>
        <Head/>  
        <Outlet/>
        <Footer/> 
        </>
    )
}
export default Layout;