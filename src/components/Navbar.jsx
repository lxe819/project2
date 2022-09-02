import { Link, useNavigate } from "react-router-dom";
import { navbarIcons } from "./navbarIcons";

function Navbar( {userDetails, setUserDetails, inputObj} ) {

    const navigate = useNavigate(); 
    const handleSignOut = () => {
        setUserDetails({...userDetails, siteInfo: inputObj}); 
        // localStorage.setItem(userDetails.username, JSON.stringify(userDetails)); 
        localStorage.setItem(userDetails.username, JSON.stringify({...userDetails, siteInfo: inputObj})); 
        alert("Your workout has been saved!")
        navigate("/logout");
    }

    return (
        <div className="navbar bg-base-100 mt-5">
            <Link to="/"><img className="w-8 mr-5 ml-7" src={navbarIcons.homeIcon} /></Link>
            <div className="navbar-end w-full mr-7">
                <Link to="/workout_log"><img className="w-8" src={navbarIcons.calendarIcon} /></Link>
                <Link to="/workout_library"><img className="w-8 mx-5" src={navbarIcons.workoutLibIcon} /></Link>
                <button onClick={handleSignOut}><img className="w-8" src={navbarIcons.signOutIcon} /></button>

            </div>
        </div>
    )
}

export default Navbar; 