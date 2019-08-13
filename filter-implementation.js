// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  this.forEach(x => {if(callback(x)){newArray.push(x)}});

  return newArray;

};

// in our call to myfilter we use classic function syntax
var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

// using arrow function syntax
var new_s2 = s.myFilter(x => ++x);
console.log(new_s2;)