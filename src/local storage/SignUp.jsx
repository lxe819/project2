import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp( {setUserDetails} ) {

    const usernameRef = useRef(); 
    const passwordRef = useRef(); 
    const navigate = useNavigate(); 

    const handleSignUp = () => {
        const username = usernameRef.current.value; 
        const password = passwordRef.current.value; 

        if (username === "" || password === ""){
            alert("Please key in a username and/or password.")
        } else {
            if (localStorage.getItem(username) !== null){
                alert("Sorry, username has been taken, please select another one.")
            } else {
                const userInfo = {
                    username: username, 
                    password: password, 
                    siteInfo: [], 
                }
                localStorage.setItem(userInfo.username, JSON.stringify(userInfo)); 
                setUserDetails(userInfo); 
                navigate("/")
            }
        }
    }


    return (
        <div>
            <h1>Welcome to the site!</h1>
            <h3>Sign up to start tracking your gym workouts!</h3>
            <input ref={usernameRef} placeholder="Username" />
            <input ref={passwordRef} placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    )
}

export default SignUp; 