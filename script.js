import Timer from "./timer.js";

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 1,
  },
});

let timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 1,
  },
});

let timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

timeline.fromTo(".sliding-text", { y: 0 }, { y: -400 });
timeline2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 1, top: "1rem", left: "3rem", x: "50%", y: "50%" }
);


barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});


// METRONOME CODE ////////////////////////////////////////////////////////////
const leftSide = document.querySelector(".left-side");
const leftSlide = document.querySelector(".left-slide");
const leftSlideColor = document.querySelector(".left-slide-color");
const bpmDisplay = document.querySelector(".bpm-display");
const tempoDisplay = document.querySelector(".tempo");
const tempoText = document.querySelector(".tempo-text");
const decreaseTempoBtn = document.querySelector(".decrease-tempo");
const increaseTempoBtn = document.querySelector(".increase-tempo");
const tempoSlider = document.querySelector(".slider");
const startStopBtn = document.querySelector(".start-stop");
const startStopBtnFront = document.querySelector(".front");
const subtractBeats = document.querySelector(".subtract-beats");
const addBeats = document.querySelector(".add-beats");
const measureCount = document.querySelector(".measure-count");
const metronomeType = document.querySelector(".front1");
const rightSlideColor = document.querySelector(".right-slide-color");
const rightSlide = document.querySelector(".right-slide");
const rightSide = document.querySelector(".right-side");

const metronomeDown = new Audio("./Sounds/MetronomeDown.mp3");
const metronomeUp = new Audio("./Sounds/MetronomeUp.mp3");
const popUp = new Audio("./Sounds/popUp.mp3");
const popDown = new Audio("./Sounds/popDown.mp3");

function enableMute() {
  metronomeUp.muted = true;
  metronomeDown.muted = true;
}

function disableMute() {
  metronomeUp.muted = false;
  metronomeDown.muted = false;
}

let bpm = 100;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = "Medium";
let metronomeTypeActive = false;

var previousRotation = 0;

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;

  metronome.timeInterval = 60000 / bpm;
  metronomeEighth.timeInterval = 30000 / bpm;
  metronomeTriplet.timeInterval = 20000 / bpm;
  metronomeSixteenth.timeInterval = 15000 / bpm;

  if (bpm >= 20 && bpm <= 100) {
    tempoTextString = "Slow";
  } else if (bpm > 100 && bpm <= 180) {
    tempoTextString = "Medium";
  } else {
    tempoTextString = "Fast";
  }

  tempoText.textContent = tempoTextString.toUpperCase();
}

metronomeType.addEventListener("click", () => {
  if (!metronomeTypeActive) {
    popUp.play();
    metronomeTypeActive = true;
    metronomeType.textContent = "STANDARD";
    
    leftSlideColor.classList.remove("white");
    rightSlideColor.classList.remove("white");

    
    leftSlide.classList.add("visualActive");
    rightSlide.classList.add("visualActive");

  } else {
    popDown.play();
    metronomeTypeActive = false;
    metronomeType.textContent = "VISUAL"
    
    leftSlideColor.classList.add("white");
    rightSlideColor.classList.add("white");

    
    leftSlide.classList.remove("visualActive");
    rightSlide.classList.remove("visualActive");
    
    
    leftSlide.classList.remove("scaleUp");
    rightSlide.classList.remove("scaleUp");
  }
});

function playClick() {

  if (count === beatsPerMeasure) {
    count = 0;
  }

  if (count === 0) {
    metronomeUp.play();
    metronomeUp.currentTime = 0;
  } else {
    metronomeDown.play();
    metronomeDown.currentTime = 0;
  }

  count++;

  if (metronomeTypeActive) {
    visualModeOn();

  } else {
    visualModeOff();
  }
}

function playClickEighth() {

  if (count === beatsPerMeasure) {
    count = 0;
  }

  if (count === 0) {
    metronomeUp.play();
    metronomeUp.currentTime = 0;
  } else {
    metronomeDown.play();
    metronomeDown.currentTime = 0;
  }

  count++;

  if (metronomeTypeActive) {
    visualModeOn();

  } else {
    visualModeOff();
  }
}

function playClickTriplet() {

  if (count === beatsPerMeasure) {
    count = 0;
  }

  if (count === 0 || count === 3 || count === 6 || count === 9) {
    metronomeUp.play();
    metronomeUp.currentTime = 0;
  } else {
    metronomeDown.play();
    metronomeDown.currentTime = 0;
  }

  count++;

  if (metronomeTypeActive) {
    visualModeOn();

  } else {
    visualModeOff();
  }
}

function playClickSixteenth() {

  if (count === beatsPerMeasure) {
    count = 0;
  }

  if (count === 0 || count === 4 || count === 8 || count === 12) {
    metronomeUp.play();
    metronomeUp.currentTime = 0;
  } else {
    metronomeDown.play();
    metronomeDown.currentTime = 0;
  }

  count++;

  if (metronomeTypeActive) {
    visualModeOn();

  } else {
    visualModeOff();
  }
}

function visualModeOn() {
  enableMute();

  tempoText.style.visibility = "hidden";
  bpmDisplay.style.visibility = "hidden";
  tempoDisplay.style.visibility = "hidden";
  tempoSlider.style.visibility = "hidden";
  decreaseTempoBtn.style.visibility = "hidden";
  increaseTempoBtn.style.visibility = "hidden";
  

  if (count === 1) {
    leftSlideColor.style.background = "#545454";
    leftSlide.classList.add("scaleUp");
    rightSlideColor.style.background = "#545454";
    rightSlide.classList.remove("scaleUp");
  } else if (count > 1 && count <= beatsPerMeasure) {
    if (count % 2 !== 0) {
      leftSlideColor.style.background = "#545454";
      leftSlide.classList.add("scaleUp");
      rightSlideColor.style.background = "#545454";
      rightSlide.classList.remove("scaleUp");
    } else {
      leftSlideColor.style.background = "#545454";
      leftSlide.classList.remove("scaleUp");
      rightSlideColor.style.background = "#545454";
      rightSlide.classList.add("scaleUp");
    }
  }
  
}

function visualModeOff() {
  disableMute();

  leftSide.style.background = "white";
  rightSide.style.background = "white";

  tempoText.style.visibility = "visible";
  bpmDisplay.style.visibility = "visible";
  tempoDisplay.style.visibility = "visible";
  tempoSlider.style.visibility = "hidden";
  decreaseTempoBtn.style.visibility = "hidden";
  increaseTempoBtn.style.visibility = "hidden";
}

// ROTATING KNOB /////////////////////////////////////////////////
Draggable.create("#knob", {
  type: "rotation",
  throwProps: true,
  onDrag: function () {
    var yourDraggable = Draggable.get("#knob");

    if (yourDraggable.rotation - previousRotation > 0) {
      bpm++;
    } else {
      bpm--;
    }

    if (bpm < 20) {
      bpm = 20;
    } else if (bpm > 280) {
      bpm = 280;
    }

    previousRotation = yourDraggable.rotation;

    updateMetronome();
  },
});

/////////////////////////////////////////////////////////////////////

decreaseTempoBtn.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  updateMetronome();
});

increaseTempoBtn.addEventListener("click", () => {
  if (bpm >= 280) {
    return;
  }
  bpm++;
  updateMetronome();
});

/////////////////////////////////////////////////////////////////////////////

// Continuously increment on pressing the increment tempo button ///////
let value = bpm;
let timer;

function continuousIncrement() {
  tempoDisplay.textContent = ++value;
  bpm = value - 1;
  timer = setTimeout(continuousIncrement, 200);
  tempoSlider.value = bpm;
}

function timeoutClear() {
  clearTimeout(timer);
}

increaseTempoBtn.addEventListener("mousedown", continuousIncrement);
increaseTempoBtn.addEventListener("mouseup", timeoutClear);
increaseTempoBtn.addEventListener("mouseleave", timeoutClear);

/////////////////////////////////////////////////////////////////////////

// Continuously decrement on pressing the decrement tempo button ///////

function continuousDecrement() {
  tempoDisplay.textContent = --value;
  bpm = value + 1;
  timer = setTimeout(continuousDecrement, 200);
  tempoSlider.value = bpm;
}

decreaseTempoBtn.addEventListener("mousedown", continuousDecrement);
decreaseTempoBtn.addEventListener("mouseup", timeoutClear);
decreaseTempoBtn.addEventListener("mouseleave", timeoutClear);

///////////////////////////////////////////////////////////////////////

// SLIDER ////////////////////////////////////////////

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  updateMetronome();
});

startStopBtn.addEventListener("click", () => {
  count = 0;
  if (!isRunning) {
    metronome.start();
    startStopBtnFront.classList.add("active");
    isRunning = true;
  } else {
    metronome.stop()
    metronomeEighth.stop();
    metronomeTriplet.stop();
    metronomeSixteenth.stop();
    startStopBtnFront.classList.remove("active");
    isRunning = false;
  }
});

// TAP TEMPO

const tapTempoBtn = document.querySelector(".tapTempo");
var counter = 0,
  clearTimer,
  start,
  delta;

var countTap = function () {
  clearTimeout(clearTimer);

  if (!start) {
    start = new Date().getTime();
  } else {
    delta = new Date().getTime() - start;
    tempoDisplay.textContent = Math.round((60 * 1000 * counter) / delta);
    bpm = tempoDisplay.textContent;
    updateMetronome();

    // A sec N times
    // 60 sec X times
    // X = N * 60 / A
  }
  counter++;

  // Reset counter after 5 seconds
  clearTimer = setTimeout(function () {
    counter = 0;
    delta = 0;
    start = 0;
    tempoDisplay.textContent = bpm;
  }, 5000);
};

tapTempoBtn.addEventListener("click", countTap);

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });
const metronomeEighth = new Timer(playClickEighth, 30000 / bpm, { immediate: true });
const metronomeTriplet = new Timer(playClickTriplet, 20000 / bpm, { immediate: true });
const metronomeSixteenth = new Timer(playClickSixteenth, 15000 / bpm, { immediate: true });


/////////////////////////////////////////////////////////////////////////

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.querySelector('.section4');


const leftCloseIcon = document.getElementById("left-close-icon");
const rightCloseIcon = document.getElementById("right-close-icon");

leftSlide.addEventListener("click", () => {
  section2.classList.remove("leftSlideInactive");
  section2.classList.add("leftSlideActive");
  section1.classList.remove("filterInactive");
  section1.classList.add("filterActive");
  section4.classList.remove("filterInactive");
  section4.classList.add("filterActive");
  section1.style.paddingTop = "0";
});

leftCloseIcon.addEventListener("click", () => {
  section2.classList.add("leftSlideInactive");
  section1.classList.add("filterInactive");
  section4.classList.add("filterInactive");
});

rightSlide.addEventListener("click", () => {
  section3.classList.remove("rightSlideInactive");
  section3.classList.add("rightSlideActive");
  section1.classList.remove("filterInactive");
  section1.classList.add("filterActive");
  section4.classList.remove("filterInactive");
  section4.classList.add("filterActive");
});

rightCloseIcon.addEventListener("click", () => {
  section3.classList.add("rightSlideInactive");
  section1.classList.add("filterInactive");
  section4.classList.add("filterInactive");
});

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");
const forBounce1 = document.getElementById("forBounce1");
const forBounce2 = document.getElementById("forBounce2");
const forBounce3 = document.getElementById("forBounce3");
const forBounce4 = document.getElementById("forBounce4");

document.getElementById("note-length1").innerHTML = "QUARTER NOTE";

let current = 0;
let prev = 3;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
current = number;
prev = current - 1;
next = current + 1;

for (let i = 0; i < slides.length; i++) {
	slides[i].classList.remove("present");
        
	slides[i].classList.remove("prev");
        
	slides[i].classList.remove("next");
        
}

if (next == 4) {
	next = 0;
}

if (prev == -1) {
	prev = 3;
}

slides[current].classList.add("present");
if (slides[current].classList.contains("present") && slides[current].classList.contains("quarter")) {

  if (document.getElementById("quarter-image").classList.contains("whole")) {
    document.getElementById("note-length1").innerHTML = "WHOLE NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("quarter-image").classList.contains("half")) {
    document.getElementById("note-length1").innerHTML = "HALF NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("quarter-image").classList.contains("eighthSingle")) {
    document.getElementById("note-length1").innerHTML = "EIGHTH NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else {
    document.getElementById("note-length1").innerHTML = "QUARTER NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  forBounce2.classList.remove("bounce2");
  forBounce1.classList.add("bounce2");
  forBounce4.classList.remove("bounce2");
  forBounce3.classList.remove("bounce2");

  beatsPerMeasure = 4;
  count = 0;

  if (isRunning) {
    metronome.start();
    metronomeEighth.stop();
    metronomeTriplet.stop();
    metronomeSixteenth.stop();
  }
}


else if (slides[current].classList.contains("present") && slides[current].classList.contains("eighth")) {

  if (document.getElementById("eighth-image").classList.contains("half")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "HALF NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("eighth-image").classList.contains("quarterNote")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "QUARTER NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("eighth-image").classList.contains("twoSixteenth")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "SIXTEENTH NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "EIGHTH NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }


  forBounce4.classList.remove("bounce2");
  forBounce3.classList.remove("bounce2")
  forBounce1.classList.remove("bounce2");
  forBounce2.classList.add("bounce2");

  beatsPerMeasure = 8;
  count = 0;

  if (isRunning) {
    metronome.stop();
    metronomeTriplet.stop();
    metronomeEighth.start();
  }
}

else if (slides[current].classList.contains("present") && slides[current].classList.contains("triplet")) {

  if (document.getElementById("triplet-image").classList.contains("half-triplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "HALF TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("triplet-image").classList.contains("quarterTriplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "QUARTER TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("triplet-image").classList.contains("sixteenthTriplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "SIXTEENTH TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  forBounce1.classList.remove("bounce2");
  forBounce4.classList.remove("bounce2");
  forBounce2.classList.remove("bounce2");
  forBounce3.classList.add("bounce2");
  

  beatsPerMeasure = 12;
  count = 0;

  if (isRunning) {
    metronome.stop();
    metronomeEighth.stop();
    metronomeSixteenth.stop();
    metronomeTriplet.start();
  }
}



else if(slides[current].classList.contains("present") && slides[current].classList.contains("sixteenth")) {

  if (document.getElementById("sixteenth-image").classList.contains("four-quarter")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "QUARTER NOTE";
  }

  else if (document.getElementById("sixteenth-image").classList.contains("fourEighths")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "EIGHTH NOTE";
  }

  else if (document.getElementById("sixteenth-image").classList.contains("thirtySecondNote")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = ""; 
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "THIRTY-SECOND NOTE";
  }

  else {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "SIXTEENTH NOTE";
  }

  forBounce1.classList.remove("bounce2");
  forBounce2.classList.remove("bounce2");
  forBounce3.classList.remove("bounce2");
  forBounce4.classList.add("bounce2");

  beatsPerMeasure = 16;
  count = 0;

  if (isRunning) {
    metronome.stop();
    metronomeEighth.stop();
    metronomeTriplet.stop();
    metronomeSixteenth.start();
  }
}

slides[prev].classList.add("prev");
      
slides[next].classList.add("next");
      
}

// SECTION 3 - SCROLL PICKER 1


const slider2 = document.querySelector(".items2");
const slides2 = document.querySelectorAll(".item2");
const button2 = document.querySelectorAll(".button2");

document.getElementById("leftOneId").innerHTML = "1";
document.getElementById("leftTwoId").innerHTML = "2";
document.getElementById("leftThreeId").innerHTML = "3";
document.getElementById("leftFourId").innerHTML = "4";
document.getElementById("leftFiveId").innerHTML = "5";
document.getElementById("leftSixId").innerHTML = "6";
document.getElementById("leftSevenId").innerHTML = "7";
document.getElementById("leftEightId").innerHTML = "8";
document.getElementById("leftNineId").innerHTML = "9";
document.getElementById("leftTenId").innerHTML = "10";
document.getElementById("leftElevenId").innerHTML = "11";
document.getElementById("leftTwelveId").innerHTML = "12";
document.getElementById("leftThirteenId").innerHTML = "13";
document.getElementById("leftFourteenId").innerHTML = "14";
document.getElementById("leftFifteenId").innerHTML = "15";
document.getElementById("leftSixteenId").innerHTML = "16";

let current2 = 3;
let prev2 = 2;
let next2 = 4;

for (let i = 0; i < button2.length; i++) {
	button2[i].addEventListener("click", () => i == 0 ? gotoPrev2() : gotoNext2());
}

const gotoPrev2 = () => current2 > 0 ? gotoNum2(current2 - 1) : gotoNum2(slides2.length - 1);

const gotoNext2 = () => current2 < 15 ? gotoNum2(current2 + 1) : gotoNum2(0);

const gotoNum2 = number2 => {
current2 = number2;
prev2 = current2 - 1;
next2 = current2 + 1;

for (let i = 0; i < slides2.length; i++) {
	slides2[i].classList.remove("present2");
        
	slides2[i].classList.remove("prev2");
        
	slides2[i].classList.remove("next2");
        
}

if (next2 == 16) {
	next2 = 0;
}

if (prev2 == -1) {
	prev2 = 15;
}

slides2[current2].classList.add("present2");

if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftOne")) {
  beatsPerMeasure = 1;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftTwo")) {
  beatsPerMeasure = 2;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftThree")) {
  beatsPerMeasure = 3;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftFour")) {
  beatsPerMeasure = 4;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftFive")) {
  beatsPerMeasure = 5;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftSix")) {
  beatsPerMeasure = 6;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftSeven")) {
  beatsPerMeasure = 7;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftEight")) {
  beatsPerMeasure = 8;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftNine")) {
  beatsPerMeasure = 9;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftTen")) {
  beatsPerMeasure = 10;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftEleven")) {
  beatsPerMeasure = 11;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftTwelve")) {
  beatsPerMeasure = 12;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftThirteen")) {
  beatsPerMeasure = 13;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftFourteen")) {
  beatsPerMeasure = 14;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftFifteen")) {
  beatsPerMeasure = 15;
  count = 0;

  console.log(beatsPerMeasure);
}
else if(slides2[current2].classList.contains("present2") && slides2[current2].classList.contains("leftSixteen")) {
  beatsPerMeasure = 16;
  count = 0;

  console.log(beatsPerMeasure);
}
      
slides2[prev2].classList.add("prev2");
      
slides2[next2].classList.add("next2");
      
}


// SECTION 3 - SCROLL PICKER 2

const slider3 = document.querySelector(".items3");
const slides3 = document.querySelectorAll(".item3");
const button3 = document.querySelectorAll(".button3");

document.getElementById('rightOneId').innerHTML = "1";
document.getElementById('rightTwoId').innerHTML = "2";
document.getElementById('rightFourId').innerHTML = "4";
document.getElementById('rightEightId').innerHTML = "8";

let current3 = 2;
let prev3 = 1;
let next3 = 3;

for (let i = 0; i < button3.length; i++) {
	button3[i].addEventListener("click", () => i == 0 ? gotoPrev3() : gotoNext3());
}

const gotoPrev3 = () => current3 > 0 ? gotoNum3(current3 - 1) : gotoNum3(slides3.length - 1);

const gotoNext3 = () => current3 < 3 ? gotoNum3(current3 + 1) : gotoNum3(0);

const gotoNum3 = number3 => {
current3 = number3;
prev3 = current3 - 1;
next3 = current3 + 1;

for (let i = 0; i < slides3.length; i++) {
	slides3[i].classList.remove("present3");
        
	slides3[i].classList.remove("prev3");
        
	slides3[i].classList.remove("next3");
        
}

if (next3 == 4) {
	next3 = 0;
}

if (prev3 == -1) {
	prev3 = 3;
}

slides3[current3].classList.add("present3");


if (slides3[current3].classList.contains("present3") && slides3[current3].classList.contains("rightOne")) {
  
  document.getElementById("quarter-image").classList.remove('half');
  document.getElementById("quarter-image").classList.remove('eighthSingle');
  document.getElementById("quarter-image").classList.add('whole');


  document.getElementById("eighth-image").classList.remove('quarterNote');
  document.getElementById("eighth-image").classList.remove('twoSixteenth');
  document.getElementById("eighth-image").classList.add('half');
  
  
  document.getElementById("triplet-image").classList.remove('quarterTriplet');
  document.getElementById("triplet-image").classList.remove('sixteenthTriplet');
  document.getElementById("triplet-image").classList.add('half-triplet');
  
  document.getElementById('sixteenth-image').classList.remove('fourEighths');
  document.getElementById("sixteenth-image").classList.remove('thirtySecondNote');
  document.getElementById("sixteenth-image").classList.add('four-quarter');

  if (document.getElementById("firstId").classList.contains("present") && document.getElementById("quarter-image").classList.contains("whole")) {
    document.getElementById("note-length1").innerHTML = "WHOLE NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("secondId").classList.contains("present") && document.getElementById("eighth-image").classList.contains("half")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "HALF NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("thirdId").classList.contains("present") && document.getElementById("triplet-image").classList.contains("half-triplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "HALF TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("fourthId").classList.contains("present") && document.getElementById("sixteenth-image").classList.contains("four-quarter")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "QUARTER NOTE";
  }

}


else if (slides3[current3].classList.contains("present3") && slides3[current3].classList.contains("rightTwo")) {

  document.getElementById("quarter-image").classList.remove('whole');
  document.getElementById("quarter-image").classList.add('half');

  document.getElementById("eighth-image").classList.remove('half');
  document.getElementById("eighth-image").classList.add('quarterNote');

  document.getElementById("triplet-image").classList.remove('half-triplet');
  document.getElementById("triplet-image").classList.add('quarterTriplet');

  document.getElementById('sixteenth-image').classList.remove('four-quarter');
  document.getElementById('sixteenth-image').classList.add('fourEighths');

  if (document.getElementById("firstId").classList.contains("present") && document.getElementById("quarter-image").classList.contains("half")) {
    document.getElementById("note-length1").innerHTML = "HALF NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("secondId").classList.contains("present") && document.getElementById("eighth-image").classList.contains("quarterNote")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "QUARTER NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("thirdId").classList.contains("present") && document.getElementById("triplet-image").classList.contains("quarterTriplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "QUARTER TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("fourthId").classList.contains("present") && document.getElementById("sixteenth-image").classList.contains("fourEighths")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "EIGHTH NOTE";
  }

}

else if (slides3[current3].classList.contains("present3") && slides3[current3].classList.contains("rightFour")) {

  document.getElementById("quarter-image").classList.remove('eighthSingle');
  document.getElementById("quarter-image").classList.remove('half');
  document.getElementById("quarter-image").classList.remove('whole');

  document.getElementById("eighth-image").classList.remove('twoSixteenth');
  document.getElementById("eighth-image").classList.remove('quarterNote');
  document.getElementById("eighth-image").classList.remove('half');

  document.getElementById("triplet-image").classList.remove('sixteenthTriplet');
  document.getElementById("triplet-image").classList.remove('quarterTriplet');
  document.getElementById("sixteenth-image").classList.remove('half-triplet');
  
  document.getElementById("sixteenth-image").classList.remove('fourEighths');
  document.getElementById("sixteenth-image").classList.remove('thirtySecondNote');
  document.getElementById("sixteenth-image").classList.remove('four-quarter');  

  if (document.getElementById("firstId").classList.contains("present")) {
    document.getElementById("note-length1").innerHTML = "QUARTER NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("secondId").classList.contains("present")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "EIGHTH NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("thirdId").classList.contains("present")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("fourthId").classList.contains("present")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "SIXTEENTH NOTE";
  }

}

else if (slides3[current3].classList.contains("present3") && slides3[current3].classList.contains("rightEight")) {
  document.getElementById("quarter-image").classList.add('eighthSingle');
  document.getElementById("quarter-image").classList.remove('whole');

  document.getElementById("eighth-image").classList.add('twoSixteenth');
  document.getElementById("eighth-image").classList.remove('half');

  document.getElementById("triplet-image").classList.add('sixteenthTriplet');
  
  document.getElementById("sixteenth-image").classList.add('thirtySecondNote');
 
  if (document.getElementById("firstId").classList.contains("present") && document.getElementById("quarter-image").classList.contains("eighthSingle")) {
    document.getElementById("note-length1").innerHTML = "EIGHTH NOTE";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("secondId").classList.contains("present") && document.getElementById("eighth-image").classList.contains("twoSixteenth")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "SIXTEENTH NOTE";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("thirdId").classList.contains("present") && document.getElementById("triplet -image").classList.contains("sixteenthTriplet")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "SIXTEENTH TRIPLET NOTE";
    document.getElementById("note-length4").innerHTML = "";
  }

  else if (document.getElementById("fourthId").classList.contains("present") && document.getElementById("sixteenth-image").classList.contains("thirtySecondNote")) {
    document.getElementById("note-length1").innerHTML = "";
    document.getElementById("note-length2").innerHTML = "";
    document.getElementById("note-length3").innerHTML = "";
    document.getElementById("note-length4").innerHTML = "THIRTY-SECOND NOTE";
  }

}
      
slides3[prev3].classList.add("prev3");
      
slides3[next3].classList.add("next3");
      
}


// SECTION 4

const swup = new Swup();
