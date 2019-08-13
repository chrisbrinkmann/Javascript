// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow : { max: maxOfTomorrow}} = LOCAL_FORECAST

  //const maxOfTomorrow = forecast.tomorrow.max;
    
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6