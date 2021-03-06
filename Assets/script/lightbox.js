const lightbox = document.querySelector(".popup-video");
const allVids = document.querySelector(".popup-video video");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const vidOne = document.querySelector("#matt");
const vidTwo = document.querySelector("#adam");
const vidThree = document.querySelector("#ivory");
const exitBtn = document.querySelector("#exit");
const mainVid = document.querySelector("#recruitVid");

console.log;

btnOne.addEventListener("click", () => {
  lightbox.style.display = "block";
  vidOne.style.display = "block";
  vidOne.play();
  mainVid.pause();
});

btnTwo.addEventListener("click", () => {
  lightbox.style.display = "block";
  vidTwo.style.display = "block";
  vidTwo.play();

  mainVid.pause();
});

btnThree.addEventListener("click", () => {
  lightbox.style.display = "block";
  vidThree.style.display = "block";
  vidThree.play();

  mainVid.pause();
});

exitBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  vidOne.style.display = "none";
  vidTwo.style.display = "none";
  vidThree.style.display = "none";
  vidOne.pause();
  vidTwo.pause();
  vidThree.pause();
  vidOne.currentTime = 0;
  vidTwo.currentTime = 0;
  vidThree.currentTime = 0;
});
