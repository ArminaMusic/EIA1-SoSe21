let sounds = [];
sounds[0] = new Audio("../07_Programmierung_2/task_material/assets/A.mp3");
sounds[1] = new Audio("../07_Programmierung_2/task_material/assets/C.mp3");
sounds[2] = new Audio("../07_Programmierung_2/task_material/assets/F.mp3");
sounds[3] = new Audio("../07_Programmierung_2/task_material/assets/G.mp3");
sounds[4] = new Audio("../07_Programmierung_2/task_material/assets/hihat.mp3");
sounds[5] = new Audio("../07_Programmierung_2/task_material/assets/kick.mp3");
sounds[6] = new Audio(
  "../07_Programmierung_2/task_material/assets/laugh-1.mp3"
);
sounds[7] = new Audio(
  "../07_Programmierung_2/task_material/assets/laugh-2.mp3"
);
sounds[8] = new Audio("../07_Programmierung_2/task_material/assets/snare.mp3");

document.querySelector(".drum_box").addEventListener("click", function (e) {
  const target = <HTMLElement>e.target;

  switch (target.id) {
    case "drum1":
      playSample(0);
      break;
    case "drum2":
      playSample(1);
      break;
    case "drum3":
      playSample(2);
      break;
    case "drum4":
      playSample(3);
      break;
    case "drum5":
      playSample(4);
      break;
    case "drum6":
      playSample(5);
      break;
    case "drum7":
      playSample(6);
      break;
    case "drum8":
      playSample(7);
      break;
    case "drum9":
      playSample(8);
      break;
    default:
      break;
  }
});

//function manual play
function playSample(x: number) {
  sound[x].play();
}

//Beat_Array
let beat = [];
beat[0] = new Audio("../07_Programmierung_2/task_material/assets/kick.mp3");
beat[1] = new Audio("../07_Programmierung_2/task_material/assets/snare.mp3");
beat[2] = new Audio("../07_Programmierung_2/task_material/assets/hihat.mp3");

let myIntervall;

document.querySelector("#playbutton").addEventListener("click", function () {
  definedBeat();
});

//function beat
function definedBeat() {
  beat[0].play();
  beat[1].play();
  beat[2].play();
  //Intervall between Sounds
  myIntervall = setInterval(definedBeat, 500);
}
