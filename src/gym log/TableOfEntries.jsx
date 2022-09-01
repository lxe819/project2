import { useState } from "react";
import IndivTableRow from "./IndivTableRow";

function TableOfEntries( {exercisesPerDay, inputObj, setInputObj} ) {
    console.log("exercisesPerDay:", exercisesPerDay)
    const uniqueExArr = Object.keys(exercisesPerDay); 

    const tables = uniqueExArr.map((exercise => (
        <div className="mt-5">
            <h2 className="text-2xl text-amber-100 font-semibold text-center mb-3">{exercise}</h2> {/* name of exercise */}
            <table className="table text-center table-fixed">
                <thead>
                    <tr>
                        <th>Weight</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Total Weight</th>
                        <th className="remarks w-48">Remarks</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercisesPerDay[exercise].map(details => <IndivTableRow inputObj={inputObj} setInputObj={setInputObj} details={details}/>)}
                </tbody>
            </table>
        </div>
    )))


    return (
        <div className="m-8 mt-10">
            <h1 className="text-3xl text-accent text-center mb-3 font-semibold">Workout Achievements</h1>
            <div className="flex flex-row gap-x-16">
                {tables}
            </div>
        </div>
    )
}

export default TableOfEntries; 
