describe(' Matching Days ',function(){
  it("It should return day of the week for the first input date ",function(){
    let mainReg = matchdays(); // INSTANCE
    assert.deepEqual(mainReg.showDayOne('2018-05-30'),'Wednesday');
  })
  it("It should return day of the week for the second input date ",function(){
    let mainReg = matchdays(); // INSTANCE
    assert.deepEqual(mainReg.showDayTwo('2018-05-29'),'Tuesday');
  })
  it("It should return true if the same day of the week matches  ",function(){
    let mainReg = matchdays(); // INSTANCE
    mainReg.showDayOne('2018-05-31');
    mainReg.showDayTwo('2018-05-10');
    assert.deepEqual(mainReg.sameDay(),true);
  })
  it("It should return false if the same day of the week don't matches  ",function(){
    let mainReg = matchdays(); // INSTANCE
  let date =  mainReg.showDayOne('2018-05-31');
    let dateTwo=mainReg.showDayTwo('2018-05-11');
    assert.deepEqual(mainReg.sameDay(date,dateTwo),false);
  })
  it("It should return class name of mon if day is Monday",function(){
    let mainReg = matchdays(); // INSTANCE
    mainReg.showDayOne('2018-05-28');
    mainReg.showDayTwo('2018-05-21');
    mainReg.sameDay();
    assert.equal(mainReg.colour(),'mon');
  })
});
