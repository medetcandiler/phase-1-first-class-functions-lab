// Code your solution in this file!
const drivers = ['one','two', 'three', 'four'];
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier( integer ){
  return function( fare ){
    return fare * integer;
  }
}

const fareDoubler  = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3);




const selectDifferentDrivers = function( drivers, fnc ){
  return fnc(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers ));

