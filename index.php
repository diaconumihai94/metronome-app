<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Unibeat Concept</title>
</head>


<body>

    <?php ?>


    <section class="home">
        <nav>
            <h1 class="sliding-text">One beat closer <br>to your perfect rhythm</br></h1>
            <ul class="menu" id="menu">
                <li><a href="section1">Metronome</a></li>
                <li><a href="http://localhost:81/metronome-app/login.php">Sign In / Sign Up</a></li>
            </ul>
        </nav>
        <h1 class="logo">unibeat concept</h1>
    </section>

    <section class="section1" id="section1">
        <div class="section1-inner">
            <div class="left-side bounce-left" id="left-side">
                <div class="left-slide" id="left-slide">
                    <div class="left-slide-color"></div>
                </div>
            </div>
            <div class="metronome">
                <div class="bpm-display">
                    <span class="tempo" id="tempo">100</span>
                    <span class="bpm" id="bpm">BPM</span>
                </div>

                <div class="tempo-text" id="tempo-text">Medium</div>
                <div class="tempo-settings">
                    <div class="adjust-tempo-btn decrease-tempo" id="decrease-tempo">-</div>
                    <input type="range" min="20" max="280" step="1" class="slider" id="slider">
                    <div class="adjust-tempo-btn increase-tempo" id="increase-tempo">+</div>
                </div>


                <div id="knobBG">
                    <div id="knob"></div>
                </div>

                <div class="belowButtons">
                    <div class="playButton">
                        <button class="start-stop">
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front"></button>
                    </div>

                    <div class="visualButton">
                        <button class="visual">
                            <span class="shadow1"></span>
                            <span class="edge1"></span>
                            <span class="front1"><span>VISUAL</span></button>
                    </div>

                    <div class="tapTempo">
                        <button class="tapTempoButton">
                            <span class="shadow2"></span>
                            <span class="edge2"></span>
                            <span class="front2">TAP</span>
                        </button>
                    </div>
                </div>

            </div>
            <div class="right-side bounce-right" id="right-side">
                <div class="right-slide" id="right-slide">
                    <div class="right-slide-color"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="section2" id="section2">
        <div class="leftCloseIcon">
            <div class="left-close-icon" id="left-close-icon">
                <div></div>
                <div></div>
            </div>
        </div>

        <div class="items">
            <div class="outer-item">
                <div class="forBounce1" id="forBounce1">
                    <h3 id="note-length1"></h3>
                    <div class="item present quarter" id="firstId">
                        <div class="inner-item-1">
                            <img src="./Images/quarter.png" id='quarter-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outer-item">
                <div class="forBounce2" id="forBounce2">
                    <h3 id="note-length2"></h3>
                    <div class=" item next eighth" id="secondId">
                        <div class="inner-item-2">
                            <img src="./Images/eighth.png" id='eighth-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outer-item">
                <div class="forBounce3" id="forBounce3">
                    <h3 id="note-length3"></h3>
                    <div class="item triplet" id="thirdId">
                        <div class="inner-item-3">
                            <img src="./Images/triplet.png" id='triplet-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outer-item">
                <div class="forBounce" id="forBounce4">
                    <h3 id="note-length4"></h3>
                    <div class="item prev sixteenth" id="fourthId">
                        <div class="inner-item-4">
                            <img src="./Images/sixteenth.png" id='sixteenth-image'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <div class="button"><i class="fas"></i></div>
                <div class="button"><i class="fas"></i></div>
            </div>
        </div>

        <div class="subdivisions">
            <p>S U B D I V I S I O N S</p>
        </div>

    </section>

    <section class="section3" id="section3">
        <div class="rightCloseIcon">
            <div class="right-close-icon" id="right-close-icon">
                <div></div>
                <div></div>
            </div>
        </div>

        <div class="scroll-picker">
            <div class="scroll-picker-inner">
                <div class="scroll-picker-1">
                    <div class="items2">
                        <div class="item2 leftOne">
                            <h2 id="leftOneId"></h2>
                        </div>
                        <div class=" item2 leftTwo">
                            <h2 id="leftTwoId"></h2>
                        </div>
                        <div class="item2 prev2 leftThree">
                            <h2 id="leftThreeId"></h2>
                        </div>
                        <div class="item2 present2 leftFour">
                            <h2 id="leftFourId"></h2>
                        </div>
                        <div class="item2 next2 leftFive">
                            <h2 id="leftFiveId"></h2>
                        </div>
                        <div class="item2 leftSix">
                            <h2 id="leftSixId"></h2>
                        </div>
                        <div class="item2 leftSeven">
                            <h2 id="leftSevenId"></h2>
                        </div>
                        <div class="item2 leftEight">
                            <h2 id="leftEightId"></h2>
                        </div>
                        <div class="item2 leftNine">
                            <h2 id="leftNineId"></h2>
                        </div>
                        <div class="item2 leftTen">
                            <h2 id="leftTenId"></h2>
                        </div>
                        <div class="item2 leftEleven">
                            <h2 id="leftElevenId"></h2>
                        </div>
                        <div class="item2 leftTwelve">
                            <h2 id="leftTwelveId"></h2>
                        </div>
                        <div class="item2 leftThirteen">
                            <h2 id="leftThirteenId"></h2>
                        </div>
                        <div class="item2 leftFourteen">
                            <h2 id="leftFourteenId"></h2>
                        </div>
                        <div class="item2 leftFifteen">
                            <h2 id="leftFifteenId"></h2>
                        </div>
                        <div class="item2 leftSixteen">
                            <h2 id="leftSixteenId"></h2>
                        </div>
                        <div class="button-container2">
                            <div class="button2"><i class="fas"></i></div>
                            <div class="button2"><i class="fas"></i></div>
                        </div>
                    </div>
                </div>
                <div class="scroll-picker-2">
                    <div class="slash">
                        <img class="slash-img" src="./Images/slash.png" alt="">
                    </div>
                </div>
                <div class="scroll-picker-3">
                    <div class="items3">
                        <div class="item3 rightOne">
                            <h2 id="rightOneId"></h2>
                        </div>
                        <div class=" item3 prev3 rightTwo">
                            <h2 id="rightTwoId"></h2>
                        </div>

                        <div class=" item3 rightFour present3" id="rightFour">
                            <h2 id="rightFourId"></h2>
                        </div>

                        <div class="item3 next3 rightEight">
                            <h2 id="rightEightId"></h2>
                        </div>
                        <div class="button-container3">
                            <div class="button3"><i class="fas"></i></div>
                            <div class="button3"><i class="fas"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="timeSignature">
            <p>T I M E / S I G N A T U R E</p>
        </div>

    </section>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/Draggable.min.js" integrity="sha512-i3gZH5PXWe3Ab68C4n2ZG1lWLVbUGQHZVOH6VBzAikny0prv5fJKfxVSeBCw3J3lN7c9gUE9T97tlFOxwJtrqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js" integrity="sha512-CPA5LMoJI/a5HkSIAKcBtFXe4gqGjPUL2ExF/3PmhrrHI17wod9xOqqF+0WZQRKIIq0KwF8oG5BaiWobtrke3A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="node_modules/swup/dist/swup.min.js"></script>
    <script src="./script.js" type="module"></script>
</body>

</html>