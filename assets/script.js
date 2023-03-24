// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //save functionality in class 
  $(".saveBtn").on("click", function () {
    // console.log("save button is working");
    //save the user informaton
    //getting the text out of our text area, made it jquery by putting the $ in front 
    const val = $(this).siblings("textarea").eq(0).val();
    //were targeting the parent id so that we can then use this information to figure out the past,present, and future
    const id = $(this).parent().attr("id");
    //this is how we save the line of code 
    localStorage.setItem(id, val);
    console.log(id, val);
    // TESTING TO SEE IF ITS WORKING
  });

  //creating a time block function to let us know where were saving it to 
  $(".time-block").each(function () {
    const timeBlock = $(this);
    const hour = timeBlock.attr("id").split("-").pop();
    //we want MM DD YYYY
    //making variables for day and time 

    const currentDay = dayjs().format(" MM, DD YYYY");
    const currentTime = dayjs().format(" h:mm:A");
    //this line of codes displays the current day and time 

    $('header').append(currentDay);
    $('header').append(currentTime);
    //making variables for day and time
    const present = new Date();
    const past = new Date();
    past.setHours(present.getHours() - 1);
    const future = new Date();
    future.setHours(present.getHours() - 1);
    //setting up conditional statements for past present and future css 
    if (past < currentTime) {
     
      $(this).addClass("past");

    } else if (present === currentTime) {
     
      $(this).removeClass("present");
      
    } else {
      $(this).removeClass("future");
      
    }




    //retrieving the values 
    const id = $(this).attr("id");
    const val = localStorage.getItem(id);
    $(this).children("textarea").eq(0).val(val);
  });


});


//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
//making variables for past present future 







