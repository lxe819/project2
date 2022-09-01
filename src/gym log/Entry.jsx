import TableOfEntries from "./TableOfEntries";

const restructureData = (mastercopy) => {
    const uniqueDates = [...new Set(mastercopy.map((entry) => entry.date))];
    const dates = {};
    uniqueDates.map((date) => (dates[date] = []));
    uniqueDates.map((date) =>
      mastercopy.map((entry) => {
        if (entry.date === date) {
          dates[date].push(entry);
        }
      })
    );
  
    const uniqueExArr = {};
    uniqueDates.map((date) => {
      const uniqueExercisesPerDay = [
        ...new Set(dates[date].map((info) => info.exercise)),
      ];
      uniqueExArr[date] = uniqueExercisesPerDay;
    });
  
    const test = {};
    uniqueDates.map((date) => (test[date] = {}));
    uniqueDates.map((date) =>
      uniqueExArr[date].map((uniqEx) => (test[date][uniqEx] = []))
    );
  
    uniqueDates.map((date) =>
      uniqueExArr[date].map((unique) =>
        mastercopy.map((entry) => {
          if (entry.exercise === unique && entry.date === date) {
            test[date][unique].push(entry);
          }
        })
      )
    );
  
    return test;
  };


function Entry( {inputObj, selectedDate, setInputObj} ) {

    // const totalWeight = inputObj.map((object) => object.weight * object.set * object.rep ); 
    // const overallWeight = totalWeight.reduce((acc, eachTotal) => acc + eachTotal, 0); 


    const isThereWorkoutLog = () => {
        if (restructureData(inputObj)[selectedDate] !== undefined){

            let exercisesPerDay = restructureData(inputObj)[selectedDate]; 
            return (<TableOfEntries inputObj={inputObj} setInputObj={setInputObj} exercisesPerDay={exercisesPerDay} />)

        } else {
            return (<h4 className="m-8 mt-10 text-2xl text-center text-amber-400">Oops! There is no data for this date.<br /><span className="text-base font-bold text-white">Did you workout on this date? Key them in!</span></h4>);
        }
    }


    return (
        <>
            {isThereWorkoutLog()}
        </>
    )
    }

    export default Entry; 