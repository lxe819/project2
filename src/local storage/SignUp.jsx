import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp( {setUserDetails, setInputObj} ) {

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
                setInputObj(userInfo.siteInfo);
                navigate("/")
            }
        }
    }


    return (
        <div className="w-7/12 flex flex-col m-auto my-48">
            <h1 className="text-3xl text-center mb-16">"Anybody who is <span className="font-semibold text-accent">determined</span> to do something, <br />who wants something to be different, <br />it will <span className="font-semibold text-accent">eventually</span> be different."</h1>
            <h3 className="text-4xl font-semibold text-center mb-8">Ready to start tracking your efforts?</h3>
            <div className="flex justify-center gap-x-3">
                <input ref={usernameRef} placeholder="Username" className="w-1/3 input input-bordered input-accent" />
                <input ref={passwordRef} placeholder="Password" className="w-1/3 input input-bordered input-accent" />
                <button onClick={handleSignUp} className="btn btn-outline">Sign Up</button>

            </div>
        </div>
    )
}

export default SignUp; 