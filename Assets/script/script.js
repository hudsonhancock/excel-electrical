const video = document.getElementById("recruitVid");
const vidContainer = document.getElementById("vidContainer");

video.addEventListener("ended", function () {
  var buttonEl = document.createElement("a");
  buttonEl.setAttribute("href", "#pfa");
});

if (video.currentTime > 20) {
  alert("hello");
}

/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeem-B8xCe-jEv49qcXm86hHNjxjZtV2v-ESobUgke8dFShAw/viewform?embedded=true" width="640" height="1548" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */
