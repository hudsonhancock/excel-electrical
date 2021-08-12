const video = document.querySelector("#recruitVid");
const vidContainer = document.getElementById("vidContainer");
var playBtn = document.querySelector("#playBtn");
var pauseBtn = document.querySelector("#pauseBtn");
var banner = document.querySelector("#linkBanner");

// currentVideoTime = video.currentTime;

function playVideo() {
  video.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
}

function videoTime() {
  console.log(video.currentTime);
}

setInterval(videoTime, 1000);

video.addEventListener("timeupdate", function () {
  if (video.currentTime >= 4) {
    banner.classList.remove("hide");
  }
});

function pauseVideo() {
  video.pause();
  pauseBtn.classList.add("hide");
  playBtn.classList.remove("hide");
}

video.addEventListener("ended", function () {
  pauseBtn.classList.add("hide");
});

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
