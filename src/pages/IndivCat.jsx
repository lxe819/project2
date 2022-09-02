import { useEffect } from "react";
import { useParams } from "react-router-dom";

function IndivCat( {catDataFinal, setSelectedCat, selectedCat} ) {

    const params = useParams(); 
    // console.log(params.cat);         // "legs" when I clicked on "Legs" on /library
    const catSelected = params.cat; 

    let nameToDisplay = ""; 
    let selectedId; 
    // console.log("catDataFinal:", catDataFinal);
    catDataFinal?.map(eachCat => {
        if (eachCat.urlName === catSelected){
            nameToDisplay = eachCat.displayedName; 
            selectedId = eachCat.id; 
        }
    })


    // console.log(selectedId);

    useEffect(() => {
        fetch(`https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&category=${selectedId}`)
        .then((response) => response.json())
        .then((data) => setSelectedCat(data)); 
    }, []); 



    // SOURCE: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
        const removeHTMLTags = (text) => {
            return text.replace( /(<([^>]+)>)/ig, '');
        }


    const allTheExs = selectedCat?.results; 
    const exToBeDisplayed = allTheExs?.map((exercise, index) => (
      <div id={exercise.id} key={exercise.id} className="card w-96 p-10 shadow-inner bg-slate-600">
        <h2 className="text-2xl mb-3 font-semibold">{index+1}. {exercise.name}</h2>
        <p>{removeHTMLTags(exercise.description)}</p>
      </div>
    ))


    //* Don't understand why this didn't work. 
        // const filter = allTheExs?.map(exercise => exercise.description !== "<p>.</p>" || !("description" in exercise))

        // const exToBeDisplayed = filter?.map((exercise, index) => (
        //   <div id={exercise.id} key={exercise.id} className="card w-96 p-10 shadow-inner bg-slate-600">
        //     <h2 className="text-2xl mb-3 font-semibold">{index+1}. {exercise.name}</h2>
        //     <p>{removeHTMLTags(exercise.description)}</p>
        //   </div>
        // ))
    

    return (
        <div className="m-8">
            <h1 className="text-5xl font-bold text-center mb-10">{nameToDisplay} Exercises</h1>
            <div className="flex flex-row flex-wrap gap-5 justify-center mt-8">
                {exToBeDisplayed}
            </div>
        </div>
    )
}

export default IndivCat; 