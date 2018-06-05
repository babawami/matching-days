
function match(day1, day2){
    if (day1 === day2){
      // this is a match - only highlight one day - figure out which one
    }
    else{
      // two days to highlight - figure out which two
    }
}

function matchdays() {
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let date = '';
  let dayOne = '';
  let dayTwo = '';

  function showDayOne(date) {
    let chosenDate = new Date(date);
    dayOne = weekdays[chosenDate.getDay()];
    return dayOne;

  };

  function WeekdayList() {

return weekdays;

};


function match (dayOne,dayTwo){
  let daysColour ={};
  let dayIndex = '';
   for (var i= 0; i< weekdays.length ; i++){
    dayIndex  = weekdays[i];

    daysColour[dayIndex ]= {day: dayIndex,};


  //  if(dayOne == dayIndex){
  //   daysColour[dayIndex ] = object.assign({style: 'crimson'}, daysColour[dayIndex])
  //
  // };

   }
   return daysColour[ dayIndex];





  //  if(dayTwo == dayIndex){
  //   daysColour[dayIndex ] = object.assign({style: 'voilet'}, daysColour[dayIndex]);
  //
  // };
}

function colourDay(dayOne,map){
  for( var i =0 ; i< map.length;i++){
    if(dayOne == map[i].day){
        return map[i].style;
    }

  }

}


  function showDayTwo(dateTwo) {
    let chosenDate = new Date(dateTwo);
    dayTwo = weekdays[chosenDate.getDay()];
    return dayTwo;

  };

  function sameDay(date, dateTwo) {
    if (date === dateTwo) {
      return true;

    } else {
      return false;
    }

  }

  function colour() {
    if (dayOne == 'Monday') {
      return 'green';
    }

  }

  return {
    showDayOne: showDayOne,
    showDayTwo: showDayTwo,
    sameDay: sameDay,
    colour: colour,
    daylist: WeekdayList,
    match: match,
  }

}
