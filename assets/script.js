// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //save functionality in class 
  $(".saveBtn").on("click", function(){
    // console.log("save button is working");
    //save the user informaton
    //getting the text out of our text area, made it jquery by putting the $ in front 
    const val =$(this).siblings("textarea").eq(0).val();
    //were targeting the parent id so that we can then use this information to figure out the past,present, and future
    const id = $(this).parent().attr("id");
    //this is how we save the line of code 
    localStorage.setItem(id, val);
    console.log(id,val);
  });
    
//creating a time block function to let us know where were saving it to 
  $(".time-block").each(function (){
    //setting up conditional statements for past present and future css 
    const id = $(this).attr("id");
    const val = localStorage.getItem(id);
    $(this).children("textarea").eq(0).val(val);
  });


  });

  //making the save functionality 
  // const saveButtons = document.querySelectorAll('.saveBtn');
  // saveButtons.forEach(saveButton => {
  //   saveButton.addEventListener('click', function(){
  //   const timeBlock = saveButton.closest('.timeblock');
  //   const textInput = timeBlock.querySelector('.description').value;

  //   //getting the id of the time block and use it as the key to save the input 
  //   const timeBlockId = timeBlock.id;
  //   localStorage.setItem(timeBlockId, textInput);
  //   })
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  //we want MM DD YYYY
    const currentDay = dayjs().format(" MM, DD YYYY");
    const currentTime = dayjs().format(" h:mm:A"); 
    $('header').append(currentDay);
    
   $('header').append(currentTime);



