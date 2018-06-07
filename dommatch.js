document.addEventListener('DOMContentLoaded', function() {
  let dateOne = document.querySelector("input[name='dateOne']");
  let dateTwo = document.querySelector("input[name='dateTwo']");
  let template = document.querySelector(".matchTemplate").innerHTML;
  let displayContent = document.querySelector(".addconent");
  let compileTemplate = Handlebars.compile(template);
  const colourMatch = matchdays();

  let data = ({
    days: colourMatch.match()
  });

  displayContent.innerHTML = compileTemplate(data);



  dateOne.addEventListener('change', function() {
    //  console.log(colourMatch.daylist())
    // when I click on the date it should highlight the day of the week

    colourMatch.showDayOne(dateOne.value);
    let dataone = {
      days: colourMatch.match(dateOne.value, dateTwo.value)
    }

    displayContent.innerHTML = compileTemplate(dataone);
    
  });

  dateTwo.addEventListener('change', function() {
    // when I click on the date it should highlight the day of the week
    colourMatch.showDayTwo(dateTwo.value);
    let datatwo = {
      days: colourMatch.match(dateOne.value, dateTwo.value)
    }

    displayContent.innerHTML = compileTemplate(datatwo);




  });


});
