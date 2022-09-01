import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login( {setUserDetails} ) {

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
                navigate("/"); 
            }
        }
    }

    const handleSignUp = () => {
        navigate("/signup")
    }



    return (
        <>
            <div>
                <h1>Welcome back!</h1>
                <input ref={usernameRef} placeholder="Username" />
                <input ref={passwordRef} placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <h3>Don't have an account? Sign up for one now!</h3>
                <button onClick={handleSignUp}>Create New Account</button>
            </div>
        </>
    )
}

export default Login; 