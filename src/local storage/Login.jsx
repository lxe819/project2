import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login( {setUserDetails, setInputObj} ) {

    const usernameRef = useRef(); 
    const passwordRef = useRef(); 
    const navigate = useNavigate(); 


    const handleLogin = () => {
        const username = usernameRef.current.value; 
        const password = passwordRef.current.value; 

        if (localStorage.getItem(username) === null){
            alert("Username not found, please sign up!"); 
        } else {
            if(JSON.parse(localStorage.getItem(username)).password !== password){
                alert("Incorrect password."); 
            } else {
                setUserDetails(JSON.parse(localStorage.getItem(username))); 
                setInputObj(JSON.parse(localStorage.getItem(username)).siteInfo); 
                navigate("/"); 
            }
        }
    }

    const handleSignUp = () => {
        navigate("/signup")
    }

    const handleGuestUser =() => {
        navigate("/")
    }



    return (
        <div className="w-7/12 flex flex-col space-y-16 m-auto my-48">
            <div>
                <h1 className="text-4xl font-bold text-center mb-8">Welcome back!</h1>
                <div className="flex justify-center gap-x-3">
                    <input ref={usernameRef} placeholder="Username" className="w-1/3 input input-bordered input-accent" />
                    <input ref={passwordRef} placeholder="Password" className="w-1/3 input input-bordered input-accent" />
                    <button onClick={handleLogin} className="btn btn-outline">Login</button>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-center">Don't have an account? Sign up for one now!</h3>
                <div className="nav-buttons flex flex-col items-center">
                    <button onClick={handleSignUp} className="btn btn-outline btn-accent mt-6 w-5/12">Create New Account</button>
                    <button onClick={handleGuestUser} className="btn btn-outline mt-5 w-5/12">No thanks, Sign in as Guest User</button>
                </div>
            </div>
        </div>
    )
}

export default Login; 