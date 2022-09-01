// import fitness-calculator from "fitness-calculator"
import fitnessCalculatorFunctions from "fitness-calculator"
import { calorieNeeds } from "fitness-calculator";

// const fitnessCalculatorFunctions = import("fitness-calculator");
// const test = fitnessCalculatorFunctions.calorieNeeds("male", 22, 176, 73, "active"); 
// console.log(test);
// console.log(fitnessCalculatorFunctions.then.value);

// const test = fitnessCalculatorFunctions.then(calorieNeeds("male", 22, 176, 73, "active")); 
// console.log(test);


console.log(fitnessCalculatorFunctions);
// fitnessCalculatorFunctions.then((data) => console.log(data.calorieNeeds("male", 22, 176, 73, "active")));
const myCalorieNeeds = fitnessCalculatorFunctions.calorieNeeds("male",22,176,73,"active");
console.log(myCalorieNeeds);

function FitnessCal() {

  return (
    <div className="App">
      {test}
    </div>
  )
}

export default FitnessCal; 
