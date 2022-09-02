import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate(); 
    const handleBackToLogin = () => {
        navigate("/login"); 
    }

    return(
        <div className="w-7/12 flex flex-col m-auto my-48">
            <h1 className="text-2xl text-center mb-16">"Everything around you is going to change as soon as you change. <span className="text-accent font-semibold">Change your mind</span> and your surroundings, your environment will all change."</h1>
            <h1 className="text-4xl font-semibold text-center mb-8">See you again!</h1>
            <button onClick={handleBackToLogin} className="btn btn-outline">Back to login</button>
        </div>
    )
}

export default Logout; 