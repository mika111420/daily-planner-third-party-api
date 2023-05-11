
$(document).ready(function () {
  var dayToday = dayjs().format("dddd, MMMM D");
  $("#dayToday").text(dayToday);
})

var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H')
}, 3600000)
console.log(currentTime)

function changeTimeBlocks() {
  var currentTime = dayjs().format('H');
  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);
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
  });
}

changeTimeBlocks();

$(".saveBtn").on("click", function () {
  var text = $(this).siblings("textarea").val().trim();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, text);
});

function loadEvents() {
  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    var text = localStorage.getItem(hour);
    $(this).find("textarea").val(text);
  });
}

loadEvents();