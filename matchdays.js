function matchdays() {
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let date = '';
  let dayOne = '';
  let dayTwo = '';

  function showDayOne(date) {
    let chosenDate = new Date(date);
    dayOne = weekdays[chosenDate.getDay()];
    return dayOne;

  }

  function showDayTwo(dateTwo) {
    let chosenDate = new Date(dateTwo);
    dayTwo = weekdays[chosenDate.getDay()];
    return dayTwo;

  }


  function sameDay(date, dateTwo) {
    if (date === dateTwo) {
      return true;

    } else {
      return false;
    }

  }


  function match() {
    let daysMap = {};
    let dayIndex = '';

    for (var i = 0; i < weekdays.length; i++) {
      dayIndex = weekdays[i];

      daysMap[dayIndex] = {
        day: dayIndex
      }

      if (dayIndex == dayOne) {
        daysMap[dayIndex] = Object.assign({
            style: 'crimson'
          },
          daysMap[dayIndex]);

        if (sameDay(dayOne, dayTwo)) {
          delete daysMap[dayIndex].style;

          // alert("works");
          daysMap[dayIndex] = Object.assign({
              style: 'green'
            },
            daysMap[dayIndex]);

        }

      }


      if (dayIndex == dayTwo) {
        daysMap[dayIndex] = Object.assign({
            style: 'violet'
          },
          daysMap[dayIndex]);

        if (sameDay(dayOne, dayTwo)) {
          delete daysMap[dayIndex].style;

          daysMap[dayIndex] = Object.assign({
              style: 'green'
            },
            daysMap[dayIndex]);

        }
      }

    }
    
    return daysMap;
  }


  return {
    showDayOne: showDayOne,
    showDayTwo: showDayTwo,
    sameDay: sameDay,
    match: match,
  };

}
