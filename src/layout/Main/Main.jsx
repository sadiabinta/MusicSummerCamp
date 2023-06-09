import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import NavHeader from "../../shared/NavHeader/NavHeader";


const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;