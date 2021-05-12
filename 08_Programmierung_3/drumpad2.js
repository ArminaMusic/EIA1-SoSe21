//sounds
var sounds = [];
sounds[0] = new Audio("./L08/task_material/assets/A.wav");
sounds[1] = new Audio("./L08/task_material/assets/B.wav");
sounds[2] = new Audio("./L08/task_material/assets/bass.wav");
sounds[3] = new Audio("./L08/task_material/assets/guitar.mp3");
sounds[4] = new Audio("./L08/task_material/assets/8081.wav");
sounds[5] = new Audio("./L08/task_material/assets/kick.mp3");
sounds[6] = new Audio("./L08/task_material/assets/8082.wav");
sounds[7] = new Audio("./L08/task_material/assets/8083.wav");
sounds[8] = new Audio("./L08/task_material/assets/snare.mp3");
//HTML_Element
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var deleteButton = document.getElementById("delete");
var recordButtonBlack = document.getElementById("record-black");
var recordButtonRed = document.getElementById("record-red");
var questionMark = document.getElementById("question-mark");
var closeButton = document.getElementById("close");
var i = 0;
//Array_(Default-Beat)
var beatArray = [];
beatArray[0] = 5;
beatArray[1] = 4;
beatArray[2] = 8;
//Beat Start/Stop
var beatInterval;
//Delete-Button
var resetColor;
deleteButton.addEventListener("click", function () {
    beatArray.length = 0;
    deleteButton.setAttribute("style", "color: " + "#ff6666");
    resetColor = setTimeout(function () {
        deleteButton.setAttribute("style", "color: " + "black");
    }, 800);
});
//boolean-switches
var boolRecord = false;
var boolPlayStop = false;
//Drumpad-Buttons_EventListener
document.addEventListener("keydown", function (event) {
    //console.log(event);
    switch (event.key) {
        case "1":
            playSample(0);
            recordABeat(0);
            break;
        case "2":
            playSample(1);
            recordABeat(1);
            break;
        case "3":
            playSample(2);
            recordABeat(2);
            break;
        case "4":
            playSample(3);
            recordABeat(3);
            break;
        case "5":
            playSample(4);
            recordABeat(4);
            break;
        case "6":
            playSample(5);
            recordABeat(5);
            break;
        case "7":
            playSample(6);
            recordABeat(6);
            break;
        case "8":
            playSample(7);
            recordABeat(7);
            break;
        case "9":
            playSample(8);
            recordABeat(8);
            break;
        case " ":
            playStopKeyboard();
            break;
        case "r":
            recordKeyboard();
            break;
        case "t":
            beatArray.length = 0;
            deleteButton.setAttribute("style", "color: " + "#ff6666");
            resetColor = setTimeout(function () {
                deleteButton.setAttribute("style", "color: " + "black");
            }, 800);
            break;
    }
});
document.querySelector("#drum1").addEventListener("click", function () {
    playSample(0);
    recordABeat(0);
});
document.querySelector("#drum2").addEventListener("click", function () {
    playSample(1);
    recordABeat(1);
});
document.querySelector("#drum3").addEventListener("click", function () {
    playSample(2);
    recordABeat(2);
});
document.querySelector("#drum4").addEventListener("click", function () {
    playSample(3);
    recordABeat(3);
});
document.querySelector("#drum5").addEventListener("click", function () {
    playSample(4);
    recordABeat(4);
});
document.querySelector("#drum6").addEventListener("click", function () {
    playSample(5);
    recordABeat(5);
});
document.querySelector("#drum7").addEventListener("click", function () {
    playSample(6);
    recordABeat(6);
});
document.querySelector("#drum8").addEventListener("click", function () {
    playSample(7);
    recordABeat(7);
});
document.querySelector("#drum9").addEventListener("click", function () {
    playSample(8);
    recordABeat(8);
});
//play/stop_button_EventListener
playButton.addEventListener("click", function () {
    toggleClasses(this, stopButton);
    boolPlayStop = true;
    checkBeat();
});
stopButton.addEventListener("click", function () {
    toggleClasses(this, playButton);
    boolPlayStop = false;
    checkBeat();
});
//Record_button_EventListener
recordButtonBlack.addEventListener("click", function () {
    toggleClasses(this, recordButtonRed);
    boolRecord = true;
});
recordButtonRed.addEventListener("click", function () {
    toggleClasses(this, recordButtonBlack);
    boolRecord = false;
});
//Questionmark_text_EventListener
questionMark.addEventListener("click", function () {
    toggleClasses(this, closeButton);
    document.querySelector("#text1").classList.remove("isHidden");
    document.querySelector("#text2").classList.remove("isHidden");
    document.querySelector("#text3").classList.remove("isHidden");
});
closeButton.addEventListener("click", function () {
    toggleClasses(this, questionMark);
    document.querySelector("#text1").classList.add("isHidden");
    document.querySelector("#text2").classList.add("isHidden");
    document.querySelector("#text3").classList.add("isHidden");
});
//FUNKTIONS
//Play_function
function playSample(x) {
    sounds[x].play();
}
function checkBeat() {
    if (boolPlayStop == true) {
        beatInterval = setInterval(function () {
            if (i < beatArray.length) {
                playSample(beatArray[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 500);
    }
    else {
        clearInterval(beatInterval);
    }
}
//Record_function
function recordABeat(x) {
    if (boolRecord == true) {
        beatArray.push(x);
    }
}
//Toggle_function
function toggleClasses(firstHtmlElement, secondHtmlElement) {
    firstHtmlElement.classList.add("isHidden");
    secondHtmlElement.classList.remove("isHidden");
}
//random_funktion
// // 0 -> 10
// Math.floor(Math.random() * 11);
function playRandomSample(x) {
    sounds[x].play();
}
//KEYBOARD
//Play_Stop_Button_Keyboard_function
function playStopKeyboard() {
    if (boolPlayStop == false) {
        toggleClasses(playButton, stopButton);
        boolPlayStop = true;
        checkBeat();
    }
    else if (boolPlayStop == true) {
        toggleClasses(stopButton, playButton);
        boolPlayStop = false;
        checkBeat();
    }
}
//Record_Button_Keyboard_function
function recordKeyboard() {
    if (boolRecord == false) {
        toggleClasses(recordButtonBlack, recordButtonRed);
        boolRecord = true;
    }
    else if (boolRecord == true) {
        toggleClasses(recordButtonRed, recordButtonBlack);
        boolRecord = false;
    }
}
//# sourceMappingURL=drumpad2.js.map