import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout( {setUserDetails, inputObj, userDetails} ) {
    return (
        <>
            <Navbar setUserDetails={setUserDetails} inputObj={inputObj} userDetails={userDetails} />
            <Outlet />
        </>
    )
}

export default Layout; 