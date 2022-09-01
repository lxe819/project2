import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../components/calendar.css"
import Entry from "../gym log/Entry";
// import ForTestingPurposes from "../components/ForTestingPurposes";
import InputEntry from "../gym log/InputEntry";
// import TestingOutEditButton from "../gym log/TestingOutEditButton";


function GymLog( {inputObj, setInputObj} ) {

    // State set by React Calendar
    const [date, setDate] = useState(new Date());

    // State to capture date clicked on calendar in new format (YYYY-MM-DD)
    const [myOwnDate, setMyOwnDate] = useState(date.toLocaleDateString("en-CA")); 
        // Need this format b/c dropdown of "Date" input value is as such

    // State to store ALL RAW input values by users
        // const [inputObj, setInputObj] = useState([]); 
        // const [inputObj, setInputObj] = useState(userDetails.siteInfo); 
       

    // When a date is selected on the React Calender
    const onChange = date => {
        setDate(date); 
        // To change to YYYY-MM-DD format. 
            setMyOwnDate(date.toLocaleDateString("en-CA"));
    }



    return (
        <>
            {/* <ForTestingPurposes /> */}

            <InputEntry setInputObj={setInputObj} inputObj={inputObj} />
            {/* <TestingOutEditButton /> */}

            <div className="calendar p-16 mt-10 bg-slate-100 rounded-3xl">
                <h1 className='text-center text-3xl mb-6 text-slate-900 font-bold'>Look at how far you've come!</h1>
                <div className='calendar-container flex justify-center'>
                    <Calendar onChange={onChange} value={date} />
                </div>
                <h2 className='text-center text-2xl mt-7 font-bold text-slate-900'>
                    <span className='font-normal text-slate-900'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </h2>
            </div>

            
            <Entry inputObj={inputObj} selectedDate={myOwnDate} setInputObj={setInputObj} />
        </>
    )
}

export default GymLog; 