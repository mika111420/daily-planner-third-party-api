// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
$('.saveBtn').on('click', function() {
  var textArea = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, textArea);
})

var dayToday = dayjs().format("dddd, MMMM D")
$("#today").text(dayToday)
var currentTime = dayjs().format('H')
var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H')
}, 3600000)
console.log(currentTime)

function updateHourClass(hour, element) {
  if (currentTime > hour) {
    $(element).addClass("past")
  } else if (currentTime == hour) {
    $(element).addClass("present")
    $(element).removeClass("past")
  } else {
    $(element).addClass("future")
    $(element).removeClass("past")
    $(element).removeClass("present")
  }
}


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));

var nineAmText = $('#9AM')
var nineAmButton = $('#9amButton')

var tenAmText = $('#10AM')
var tenAmButton = $('#10amButton')

var elevenAmText = $('#11AM')
var elevenAmButton = $('#11amButton')

var twelvePmText = $('#12PM')
var twelvePmButton = $('#12pmButton')

var onePmText = $('#1PM')
var onePmButton = $('#1pmButton')

var twoPmText = $('#2PM')
var twoPmButton = $('#2pmButton')

var threePmText = $('#3PM')
var threePmButton = $('#3pmButton')

var fourPmText = $('#4PM')
var fourPmButton = $('#4pmButton')

var fivePmText = $('#5PM')
var fivePmButton = $('#5pmButton')
  function hourColor(){

  }
  
  hourColor();
    
});
