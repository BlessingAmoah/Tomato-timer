let studySessionCount = 0;
let breakSessionCount = 0;

function updateTimerDisplay(minutes, seconds) {
  let timeRemaining = document.getElementById("time-left");
  timeRemaining.innerHTML = minutes + ":" + seconds;
}
//updateTimerDisplay(14, 12);

function startTimer(duration) {
  let remainingTime = duration;
  const interval = setInterval( () =>{
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    updateTimerDisplay(minutes, seconds);

    if (remainingTime  <= 0) {
      clearInterval(interval);
    }
    else{
      remainingTime--;
    }
}, 1000);
}

function startStudySession() {
  studySessionCount++;
  document.getElementById("study-count").innerHTML = studySessionCount;
  startTimer(25 * 60);

}

function startBreakSession() {
  breakSessionCount++;
  document.getElementById("break-count").innerHTML = breakSessionCount;
  startTimer(5 * 60);

}

document.getElementById("study-btn").addEventListener('click', startStudySession);
document.getElementById("break-btn").addEventListener('click', startBreakSession);


//startTimer(30);
