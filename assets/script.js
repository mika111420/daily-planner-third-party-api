
$(document).ready(function () {
  var dayToday = dayjs().format("dddd, MMMM D");
  $("#dayToday").text(dayToday);
})

var updateCurrentDayjs = setInterval(function () {
  currentTime = dayjs().format('H');
  console.log(currentTime)
  changeTimeBlocks();
}, 3600000)


function changeTimeBlocks() {
  var currentTime = dayjs().format('H');
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var element = $(this);
    if (currentTime > hour) {
      element.addClass("past");
    } else if (currentTime == hour) {
      element.addClass("present").removeClass("past");
    } else {
      element.addClass("future").removeClass("past present");
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