//sound
var sound = [];
sound[0] = new Audio("./L08/task_material/assets/A.wav");
sound[1] = new Audio("./L08/task_material/assets/B.wav");
sound[2] = new Audio("./L08/task_material/assets/bass.wav");
sound[3] = new Audio("./L08/task_material/assets/guitar.mp3");
sound[4] = new Audio("./L08/task_material/assets/8081.wav");
sound[5] = new Audio("./L08/task_material/assets/kick.mp3");
sound[6] = new Audio("./L08/task_material/assets/8082.wav");
sound[7] = new Audio("./L08/task_material/assets/8083.wav");
sound[8] = new Audio("./L08/task_material/assets/snare.mp3");
//HTML_Element
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var deleteButton = document.getElementById("delete");
var recordBBlack = document.getElementById("record_black");
var recordButtonRed = document.getElementById("record_blue");
var questionMark = document.getElementById("question_mark");
var closeButton = document.getElementById("close");
var randomButton = document.getElementById("random");
var i = 0;
//Array_(Default_Beat)
var beatArray = [];
beatArray[0] = 5;
beatArray[1] = 4;
beatArray[2] = 8;
//Beat Start/Stop
var beatInterval;
//Delete_Button
var resetColor;
deleteButton.addEventListener("click", function () {
    beatArray.length = 0;
    deleteButton.setAttribute("style", "color: " + "#ff6666");
    resetColor = setTimeout(function () {
        deleteButton.setAttribute("style", "color: " + "black");
    }, 800);
});
//boolean_switches
var boolRecord = false;
var boolPlayStop = false;
//Drumpad_Buttons_EventListener
document.addEventListener("keydown", function (event) {
    //console.log(event);
    switch (event.key) {
        case "1":
            playSample2(0);
            recordABeat(0);
            break;
        case "2":
            playSample2(1);
            recordABeat(1);
            break;
        case "3":
            playSample2(2);
            recordABeat(2);
            break;
        case "4":
            playSample2(3);
            recordABeat(3);
            break;
        case "5":
            playSample2(4);
            recordABeat(4);
            break;
        case "6":
            playSample2(5);
            recordABeat(5);
            break;
        case "7":
            playSample2(6);
            recordABeat(6);
            break;
        case "8":
            playSample2(7);
            recordABeat(7);
            break;
        case "9":
            playSample2(8);
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
    playSample2(0);
    recordABeat(0);
});
document.querySelector("#drum2").addEventListener("click", function () {
    playSample2(1);
    recordABeat(1);
});
document.querySelector("#drum3").addEventListener("click", function () {
    playSample2(2);
    recordABeat(2);
});
document.querySelector("#drum4").addEventListener("click", function () {
    playSample2(3);
    recordABeat(3);
});
document.querySelector("#drum5").addEventListener("click", function () {
    playSample2(4);
    recordABeat(4);
});
document.querySelector("#drum6").addEventListener("click", function () {
    playSample2(5);
    recordABeat(5);
});
document.querySelector("#drum7").addEventListener("click", function () {
    playSample2(6);
    recordABeat(6);
});
document.querySelector("#drum8").addEventListener("click", function () {
    playSample2(7);
    recordABeat(7);
});
document.querySelector("#drum9").addEventListener("click", function () {
    playSample2(8);
    recordABeat(8);
});
//play/stop_button_EventListener
playButton.addEventListener("click", function () {
    console.log(this);
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
recordBBlack.addEventListener("click", function () {
    toggleClasses(this, recordButtonRed);
    boolRecord = true;
});
recordButtonRed.addEventListener("click", function () {
    toggleClasses(this, recordBBlack);
    boolRecord = false;
});
//Random_button_EventListener
randomButton.addEventListener("click", playRandomSample);
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
//Play_function(2)
function playSample2(x) {
    sound[x].play();
}
function checkBeat() {
    console.log(boolPlayStop);
    if (boolPlayStop === true) {
        beatInterval = setInterval(function () {
            if (i < beatArray.length) {
                playSample2(beatArray[i]);
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
// 5 verschiedenen random Sounds hintereinander abspielen
function playRandomSample() {
    // 1) clear beatArray
    beatArray = [];
    // 2) fill beatArray with 5 radnom numbers
    for (var i_1 = 0; i_1 < 5; i_1++) {
        var randomNum = Math.floor(Math.random() * 9);
        // fill beatarray with random number
        beatArray.push(randomNum);
    }
    // 3) play beatsArray
    boolPlayStop = true;
    checkBeat();
    // 4) show stop button
    toggleClasses(playButton, stopButton);
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
        toggleClasses(recordBBlack, recordButtonRed);
        boolRecord = true;
    }
    else if (boolRecord == true) {
        toggleClasses(recordButtonRed, recordBBlack);
        boolRecord = false;
    }
}
//# sourceMappingURL=drumpad2.js.map