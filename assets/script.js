
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
    
  });

  //creating a time block function to let us know where were saving it to 
  $(".time-block").each(function () {
    const timeBlock = $(this);
    const timeOfDay = timeBlock.attr("id").split("-").pop();
    

   
    //making variables for day and time
    const currentHour = dayjs().hour();
    
    //setting up conditional statements for past present and future css 
    if (timeOfDay < currentHour) {
     
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");

    } else if (timeOfDay === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
      
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
      
    }




    //retrieving the values 
    const id = $(this).attr("id");
    const val = localStorage.getItem(id);
    $(this).children("textarea").eq(0).val(val);
  });


});


//making variables for past present future 
const currentDay = dayjs().format(" MM, DD YYYY");
    const currentTime = dayjs().format(" h:mm:A");
    $('header').append(currentDay);
    $('header').append(currentTime);







