import Timer from "./timer.js";

const leftSide = document.querySelector(".left-side");
const bpmDisplay = document.querySelector(".bpm-display");
const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');
const metronomeType = document.querySelector('.visual');
const rightSide = document.querySelector(".right-side");


const metronomeDown = new Audio('MetronomeDown.mp3');
const metronomeUp = new Audio('MetronomeUp.mp3');


function enableMute() {
    metronomeUp.muted = true;
    metronomeDown.muted = true;
}

function disableMute() {
    metronomeUp.muted = false;
    metronomeDown.muted = false;
}

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'Medium';
let metronomeTypeActive = false;

decreaseTempoBtn.addEventListener('click', () => {
    if (bpm <= 20) {
        return;
    }
    bpm--;
    updateMetronome();
});

increaseTempoBtn.addEventListener('click', () => {
    if (bpm >= 280) {
        return;
    }
    bpm++;
    updateMetronome();
});


// Continuously increment on pressing the increment tempo button
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

increaseTempoBtn.addEventListener('mousedown', continuousIncrement);
increaseTempoBtn.addEventListener('mouseup', timeoutClear);
increaseTempoBtn.addEventListener('mouseleave', timeoutClear);



// Continuously decrement on pressing the decrement tempo button 

function continuousDecrement() {
    tempoDisplay.textContent = --value;
    bpm = value + 1;
    timer = setTimeout(continuousDecrement, 200);
    tempoSlider.value = bpm;
}

decreaseTempoBtn.addEventListener('mousedown', continuousDecrement);
decreaseTempoBtn.addEventListener('mouseup', timeoutClear);
decreaseTempoBtn.addEventListener('mouseleave', timeoutClear);

// Slider 

tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    updateMetronome();
});

subtractBeats.addEventListener('click', () => {
    if (beatsPerMeasure <= 2) {
        return;
    }
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

addBeats.addEventListener('click', () => {
    if (beatsPerMeasure >= 12) {
        return;
    }
    beatsPerMeasure ++;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

startStopBtn.addEventListener('click', () => {
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = "STOP";
    } 

    else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = "START";
    }
});

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;

    metronome.timeInterval = 60000 / bpm;
    
    if (bpm >= 20 && bpm <=100) {
        tempoTextString = "Slow";
    }

    else if (bpm > 100 && bpm <= 180) {
        tempoTextString = "Medium";
    }

    else {
        tempoTextString = "Fast";
    }

    tempoText.textContent = tempoTextString.toUpperCase();

} 

// TAP TEMPO

const tapTempoBtn = document.querySelector('.tapTempo');
var counter = 0, clearTimer, start, delta;

var countTap = function(){
    clearTimeout(clearTimer);
    
    if(!start) {
        start = new Date().getTime();
    } else {
        delta = new Date().getTime() - start;
        tempoDisplay.textContent = Math.round(60 * 1000 * counter / delta);
        bpm = tempoDisplay.textContent;
        updateMetronome();
        
        // A sec N times
        // 60 sec X times
        // X = N * 60 / A
    }
    counter++;
    
    // Reset counter after 5 seconds
    clearTimer = setTimeout(function(){
        counter = 0;
        delta = 0;
        start = 0;
        tempoDisplay.textContent = bpm;
    }, 5000);
};

tapTempoBtn.addEventListener('click', countTap);


// FUNCTION FOR VISUAL MODE ON

function visualModeOn (ev) {
    enableMute();

    document.getElementById('tapTempo').style.visibility = "hidden";
    document.getElementById('slider').style.visibility = "hidden";
    document.getElementById('decrease-tempo').style.visibility = "hidden";
    document.getElementById('increase-tempo').style.visibility = "hidden";
    document.getElementById('subtract-beats').style.visibility = "hidden";
    document.getElementById('add-beats').style.visibility = "hidden";
    document.getElementById('measure-count').style.visibility = "hidden";
    document.getElementById('beats-per-measure').style.visibility = "hidden";
    document.getElementById('bpm').style.visibility = "hidden";
    document.getElementById('tempo-text').style.visibility = "hidden";
        
    
    leftSide.style.transition = ".4s";
    rightSide.style.transition = ".4s";
    tempo.style.transition = ".7s";

    document.getElementById('tempo').style.marginLeft = "3.2em";
    tempoDisplay.style.fontSize = "12em";
    document.getElementById('tempo').textContent = count;


    if (count === 1) {
        tempo.style.color = "#545454";
        leftSide.style.background = "#fa545c";
        rightSide.style.background = "white";
    }
    
    else if (count > 1 && count <= beatsPerMeasure) {
        tempo.style.color = "#fa545c";
        if (count % 2 !== 0) {
            leftSide.style.background = "#545454";
            rightSide.style.background = "white";
                
        }

        else {
                
            leftSide.style.background = "white";
            rightSide.style.background = "#545454";
                
        }
    }
}

// FUNCTION FOR VISUAL MODE OFF

function visualModeOff(ev) {
    disableMute();

    document.getElementById('visual').style.visibility = "visible";
    document.getElementById('tapTempo').style.visibility = "visible";
    document.getElementById('slider').style.visibility = "visible";
    document.getElementById('decrease-tempo').style.visibility = "visible";
    document.getElementById('increase-tempo').style.visibility = "visible";
    document.getElementById('subtract-beats').style.visibility = "visible";
    document.getElementById('add-beats').style.visibility = "visible";
    document.getElementById('measure-count').style.visibility = "visible";
    document.getElementById('beats-per-measure').style.visibility = "visible";
    document.getElementById('bpm').style.visibility = "visible";
    document.getElementById('tempo-text').style.visibility = "visible";
        
    document.getElementById('tempo').style.marginLeft = "0";
    document.getElementById('tempo').innerHTML = bpm;
    document.getElementById('tempo').style.textAlign = "center";
    document.getElementById('tempo').style.fontSize = "4em";

    startStopBtn.style.background = "#fa545c";
    startStopBtn.style.color = "white";

    metronomeType.style.background = "#fa545c";
    metronomeType.style.color = "white";
        

    leftSide.style.background = "white";
    rightSide.style.background = "white";
}

function playClick() {
    
    if (count === beatsPerMeasure) {
        count = 0;
    }

    if (count === 0) {
        metronomeUp.play();
        metronomeUp.currentTime = 0;
    }
     
    else {
        metronomeDown.play();
        metronomeDown.currentTime = 0;
    }
     
    count++;
    
    if (metronomeTypeActive) {
        visualModeOn();
    }
    else {
        visualModeOff();
    }
}

//ACTIVATE TIMER START ON SPACE PRESS

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        count = 0;
        if (isRunning) {
            metronome.stop();
            isRunning = false;
            startStopBtn.textContent = "START";
        }
        else if (!isRunning) {
            metronome.start();
            isRunning = true;
            startStopBtn.textContent = "STOP";
        }
    }
});

// ACTIVATE VISUAL MODE ON V PRESS

document.addEventListener('keydown', (e) => {
    if (e.code === "KeyV") {
        if (!metronomeTypeActive) {
            visualModeOn();
            metronomeTypeActive = true;
            metronomeType.textContent = "STANDARD";
        }

        else if (metronomeTypeActive) {
            visualModeOff();
            metronomeTypeActive = false;
            metronomeType.textContent = "VISUAL";
        }
    }
});


// ACTIVATE TAP TEMPO ON T PRESS

document.addEventListener("keypress", (e) => {
    if (e.code === "KeyT") {
        countTap();
    }
});

// ACTIVATE METRONOME TYPE ON CLICK

metronomeType.addEventListener('click', () => {
    if (!metronomeTypeActive) {
            metronomeTypeActive = true;
            metronomeType.textContent = "STANDARD"; 
        }
        else {
            metronomeTypeActive = false;
            metronomeType.textContent = "VISUAL";
        } 
});


const metronome = new Timer(playClick, 60000 / bpm, { immediate: true});
