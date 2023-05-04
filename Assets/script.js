// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
$('.saveBtn').on('click', function() {
  var textArea = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, textArea);
})


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
  
  function hourColor(){

  }
  
  hourColor();
    
});
