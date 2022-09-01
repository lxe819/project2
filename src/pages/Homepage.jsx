import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate(); 


    return (
        <div className="w-7/12 flex flex-col space-y-7 m-auto my-48">
            <h1 className="text-3xl font-bold text-center">Welcome to the only place where effort will always reap results!</h1>
            <h3 className="text-center">What would you like to do today?</h3>
            <div className="nav-buttons flex justify-center gap-x-5">
                <button onClick={() => navigate("/workout_log")} className="btn btn-outline btn-accent mt-5">Log my gym workout</button>
                <button onClick={() => navigate("/workout_library")} className="btn btn-outline mt-5">Search for workouts</button>
            </div>
        </div>
    )
}

export default Homepage; 