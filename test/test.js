describe(' Matching Days ', function() {
  it("It should return day of the week for the first input date ", function() {
    let mainReg = matchdays(); // INSTANCE
    assert.deepEqual(mainReg.showDayOne('2018-05-30'), 'Wednesday');
  })
  it("It should return day of the week for the second input date ", function() {
    let mainReg = matchdays(); // INSTANCE
    assert.deepEqual(mainReg.showDayTwo('2018-05-29'), 'Tuesday');
  })
  it("It should return true if the same day of the week matches  ", function() {
    let mainReg = matchdays(); // INSTANCE
    mainReg.showDayOne('2018-05-31');
    mainReg.showDayTwo('2018-05-10');
    assert.deepEqual(mainReg.sameDay(), true);
  })

  it("It should return false if the same day of the week don't matches  ", function() {
    let mainReg = matchdays(); // INSTANCE
    let date = mainReg.showDayOne('2018-05-31');
    let dateTwo = mainReg.showDayTwo('2018-05-11');
    assert.deepEqual(mainReg.sameDay(date, dateTwo), false);
  });



  it("It should return map with day propery and the value should be day of the week with class crimson added", function() {
    let mainReg = matchdays(); // INSTANCE
    let dayOne = mainReg.showDayOne('2018-06-04');

    assert.deepEqual(mainReg.match(dayOne), {
        Sunday: {
          day: 'Sunday'
        },
        Monday: {
          style: 'crimson',
          day: 'Monday'
        },
        Tuesday: {
          day: 'Tuesday'
        },
        Wednesday: {
          day: 'Wednesday'
        },
        Thursday: {
          day: 'Thursday'
        },
        Friday: {
          day: 'Friday'
        },
        Saturday: {
          day: 'Saturday'
        }
      }


    );
  });

  it("It should return map with day propery and the value should be day of the week with class violet added", function() {
    let mainReg = matchdays(); // INSTANCE
    let dayOne = mainReg.showDayOne();

    let dayTwo = mainReg.showDayTwo('2018-06-05');
    assert.deepEqual(mainReg.match(dayOne, dayTwo), {
      Sunday: {
        day: 'Sunday'
      },
      Monday: {
        day: 'Monday'
      },
      Tuesday: {
        style: 'violet',
        day: 'Tuesday'
      },
      Wednesday: {
        day: 'Wednesday'
      },
      Thursday: {
        day: 'Thursday'
      },
      Friday: {
        day: 'Friday'
      },
      Saturday: {
        day: 'Saturday'
      }
    });

  });

  it("It should add class green to the day that has same date from two date input", function() {
    let mainReg = matchdays(); // INSTANCE
    let dayOne = mainReg.showDayOne('2018-06-05');

    let dayTwo = mainReg.showDayTwo('2018-06-05');
    console.log(mainReg.match(dayOne, dayTwo))
    assert.deepEqual(mainReg.match(dayOne, dayTwo), {
        Sunday: {
          day: 'Sunday'
        },
        Monday: {
          day: 'Monday'
        },
        Tuesday: {
          style: 'green',
          day: 'Tuesday'
        },
        Wednesday: {
          day: 'Wednesday'
        },
        Thursday: {
          day: 'Thursday'
        },
        Friday: {
          day: 'Friday'
        },
        Saturday: {
          day: 'Saturday'
        }
      }


    );

  });

});
