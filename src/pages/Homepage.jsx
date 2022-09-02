import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate(); 


    return (
        <>
            <div className="w-8/12 flex flex-col space-y-7 m-auto my-28">
                <h1 className="text-2xl text-center mb-20 italic">"It's about drive, it's about power. We stay hungry, we devour. <br /><span className="text-accent font-semibold">Put in the work, put in the hours, and take what's ours.</span>"</h1>
                <h1 className="text-4xl font-semibold text-center">Welcome to the only place where effort will <span className="text-accent">always</span> reap results!</h1>
                <h3 className="text-center text-xl">What would you like to do today?</h3>
                <div className="nav-buttons flex justify-center gap-x-5">
                    <button onClick={() => navigate("/workout_log")} className="btn btn-outline btn-accent mt-5">Log my gym workout</button>
                    <button onClick={() => navigate("/workout_library")} className="btn btn-outline mt-5">Search for workouts</button>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <div className="w-2/3 h-48 btn glass p-10">
                    <h3 className="text-center text-accent text-xl font-semibold italic">"It's about drive, it's about power. We stay hungry, we devour. <br />Put in the work, put in the hours, and take what's ours."</h3>
                </div>
            </div> */}

        </>
    )
}

export default Homepage; 