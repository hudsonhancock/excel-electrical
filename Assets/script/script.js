const video = document.querySelector("#recruitVid");
const vidContainer = document.getElementById("vidContainer");
var playBtn = document.querySelector("#playBtn");
var pauseBtn = document.querySelector("#pauseBtn");
var banner = document.querySelector("#linkBanner");
var formSection = document.querySelector("#formSection");

// currentVideoTime = video.currentTime;

function playVideo() {
  video.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
}

function videoTime() {
  console.log(video.currentTime);
}

function pauseVideo() {
  video.pause();
  pauseBtn.classList.add("hide");
  playBtn.classList.remove("hide");
}

video.addEventListener("timeupdate", function () {
  if (video.currentTime >= 4) {
    banner.classList.remove("hide");
  }
});

video.addEventListener("ended", function () {
  pauseBtn.classList.add("hide");
});

function insertForm() {
  formSection.classList.remove("hide");
}

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
banner.addEventListener("click", insertForm);
