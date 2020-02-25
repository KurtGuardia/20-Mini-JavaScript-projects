//DOM elements
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Song titles
const songs = [
  "nothing else matters",
  "whiskey in the jar",
  "master of puppets",
];

//Keep track of songs
let songIndex = 0;

//Initially load song details into SOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

//Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

//Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

//previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

//next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

//Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  console.log(duration, currentTime);
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

//set progress bar
function setProgress(e) {
  const width = this.clientWisdth;
  const clickX = e.offSetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
//Time/song update
audio.addEventListener("timeupdate", updateProgress);
//Clickon progress bar
progressContainer.addEventListener("click", setProgress);
//Songs ends
audio.addEventListener('ended', nextSong);