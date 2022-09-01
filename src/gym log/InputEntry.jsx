import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function InputEntry( {setInputObj, inputObj} ) {


    // const [checkInput, setCheckInput] = useState({}); 
    const [submitted, setSubmitted] = useState(); 
    // const [inputKeyed, setInputKeyed] = useState(false); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        // setInputKeyed(true); 
        
        if (event.target.elements.exercise.value === ""){
            setSubmitted("Please key in your workout exercise name."); 
        } else if (event.target.elements.date.value === ""){
            setSubmitted("Please key in your workout date.");
        } else {
            setInputObj([...inputObj, {
                exercise: event.target.elements.exercise.value, 
                date: event.target.elements.date.value, 
                weight: event.target.elements.weight.value, 
                set: event.target.elements.set.value, 
                rep: event.target.elements.rep.value, 
                remarks: event.target.elements.remarks.value, 
                uuid: uuidv4()
            }]); 
            setSubmitted("Submitted!")
            // formClear(); 
        }
    }



    return (
        <div className="m-8 mt-5">
            <h1 className="text-4xl">Great Job on the workout! <br /><span className="text-2xl">Now let's get tracking!</span></h1>
            <form onSubmit={handleSubmit} className="mt-5">
                <input className="mr-3 w-1/5 input input-bordered input-accent" name="exercise" placeholder="Exercise" />
                <input className="mr-3 input input-bordered input-accent" name="date" type="date" placeholder="Date" />
                <input className="mr-3 w-32 input input-bordered" name="weight" placeholder="Weight (kg)" />
                <input className="mr-3 w-1/12 input input-bordered" type="number" name="set" placeholder="Set" />
                <input className="mr-3 w-1/12 input input-bordered" type="number" name="rep" placeholder="Rep" />
                <input className="mr-3 w-1/4 input input-bordered" name="remarks" placeholder="Remarks"/>
                <button className="btn btn-outline btn-accent">Submit</button>
            </form>
            <h4 className="text-base mt-5">{submitted}</h4>
        </div>
    )
}

export default InputEntry; 