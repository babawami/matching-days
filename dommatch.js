document.addEventListener('DOMContentLoaded', function() {
let dateOne = document.querySelector("input[name='dateOne']");
let dateTwo = document.querySelector("input[name='dateTwo']");
let template = document.querySelector(".matchTemplate").innerHTML;
let displayContent = document.querySelector(".addconent");
let compileTemplate = Handlebars.compile(template);
const colourMatch = matchdays();
let data={
  days:  colourMatch.daylist(),
}


displayContent.innerHTML = compileTemplate(data)


dateOne.addEventListener('change',function(){
//  console.log(colourMatch.daylist())
// when I click on the date it should highlight the day of the week

  colourMatch.showDayOne(dateOne.value); // it shows the day of the week 
  console.log(colourMatch.showDayOne(dateOne.value));
  displayContent.innerHTML = compileTemplate(data);
});

dateTwo.addEventListener('change', function(){
    colourMatch.showDayTwo(dateTwo.value);


  displayContent.innerHTML = compileTemplate(data);
});


});
