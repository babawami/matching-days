function matchdays(){
let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let date = '';
let dayOne = '';
let dayTwo ='';

function showDayOne(date){
let chosenDate = new Date(date);
dayOne  = weekday[chosenDate.getDay()];
return dayOne;

};

function showDayTwo(dateTwo){
let chosenDate = new Date(dateTwo);
dayTwo = weekday[chosenDate.getDay()];
return dayTwo;

};

function sameDay(date,dateTwo){
  if(date === dateTwo){
    return true;

  }
  else{
    return false;
  }

}

function colour(){
  if(dayOne == 'Monday'){
    return 'mon';
  }

}

function returnWeekdayList(){
  return weekday
}


return{
  showDayOne:showDayOne,
  showDayTwo:showDayTwo,
  sameDay:sameDay,
  colour:colour,
  daylist: returnWeekdayList
}

}
