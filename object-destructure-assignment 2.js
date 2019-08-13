//ES6: Use Destructuring Assignment to Assign Variables from Objects

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
 
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  
  // const tempOfTomorrow = avgTemperatures.tomorrow; why not use this syntax?

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79