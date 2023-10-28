import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
    return (
        <div className="lg:mx-14 p-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;