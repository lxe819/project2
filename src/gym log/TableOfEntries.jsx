import { useState } from "react";
import IndivTableRow from "./IndivTableRow";

function TableOfEntries( {exercisesPerDay, inputObj, setInputObj} ) {
    // console.log("exercisesPerDay:", exercisesPerDay)
    const uniqueExArr = Object.keys(exercisesPerDay); 

    const tables = uniqueExArr.map((exercise => (
        <div key={exercise} className="mt-8">
            <h2 className="text-2xl text-amber-100 font-semibold text-center mb-5">{exercise}</h2> {/* name of exercise */}
            <table className="table text-center table-fixed">
                <thead>
                    <tr className="border border-slate-500">
                        <th>Weight</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Total Weight</th>
                        <th className="remarks w-48">Remarks</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="border border-slate-500">
                    {exercisesPerDay[exercise].map(details => <IndivTableRow inputObj={inputObj} setInputObj={setInputObj} details={details}/>)}
                </tbody>
            </table>
        </div>
    )))


    return (
        <div className="m-8 mt-10">
            <h1 className="text-3xl text-accent text-center mb-3 font-semibold">Workout Achievements</h1>
            <div className="flex flex-row gap-x-16 flex-wrap justify-center">
                {tables}
            </div>
        </div>
    )
}

export default TableOfEntries; 
