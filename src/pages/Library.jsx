import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../data/categories";


function Library( {setCategoriesDataFetched, categoriesDataFetched, setCatDataFinal} ) {

    const navigate = useNavigate(); 
    const categoriesURL = "https://wger.de/api/v2/exercisecategory/?format=json"


    // Don't need state b/c this won't keep changing? But I still did a fetch in case Wger decides to change the id numbers for the respective categories. 
    useEffect(() => {
        fetch(categoriesURL)
        .then((data) => data.json())
        .then((jsonedData) => setCategoriesDataFetched(jsonedData)); 
    }, []); 

    categories.map(category => {
        categoriesDataFetched?.results?.map(eachCat => {
            if (category.displayedName === eachCat.name){
                category.id = eachCat.id
            }
        })
    })

    setCatDataFinal(categories)

    // console.log(categories);


    const handleClick = (urlName) => {
        navigate(`/workout_library/${urlName}`)
    }


    const displayedCat = categories.map(eachCat => (

            // <div key={eachCat.urlName} className="card card-compact w-96 h-64 bg-amber-100 shadow-xl relative" onClick={handleClick}><h3 className="text-blue-900 text-2xl font-bold absolute bottom-5 left-1/3">{eachCat.displayedName}</h3></div>

            <div key={eachCat.urlName} className="card card-compact w-96 h-64 bg-white shadow-2xl relative" onClick={() => handleClick(eachCat.urlName)}>
                <div className="card rounded-none w-96 h-4/5">
                    <img className="object-cover" src={eachCat.imgSrc} />
                </div>
                <div className="card-body items-center text-center">
                    <h3 className="text-slate-900 text-2xl font-bold absolute bottom-3">{eachCat.displayedName.toUpperCase()}</h3>
                </div>
            </div>

    ))



    return (
        <div className="flex flex-row flex-wrap gap-5 justify-center mt-8">


            {displayedCat}

            {/* <div onClick={() => navigate("/workout_library/arms")}>Arms</div>
            <div>Chest</div>
            <div>Shoulders</div>
            <div>Back</div>
            <div>Legs</div>
            <div>Calves</div>
            <div>Abs</div> */}
        </div>
    )
}

export default Library; 



//* Note
    // There is a fetch api for the list of exercise categories but I don't want to do a map because I don't want to take their ordering of categories. 
        // Src: https://wger.de/api/v2/exercisecategory/?format=json