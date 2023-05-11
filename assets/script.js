
$(document).ready(function() {
  var currentDay = $("#currentDay");
  var currentTime = dayjs().format("dddd, MMMM D, YYYY");
  currentDay.text(currentTime);
})

  function colorTimeBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  colorTimeBlocks();

var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H')
}, 3600000)
console.log(currentTime)




updateHourClass()