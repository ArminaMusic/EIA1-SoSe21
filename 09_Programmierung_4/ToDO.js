var counting = 0;
var userTask = document.getElementById("new-task");
var clickBool = false;
var preventEventBool = false;
document.addEventListener("keydown", function (event) {
    //hier wird die "createNewTask" function ausgelöst
    if (event.code === "Enter" && clickBool === true && userTask.value !== "") {
        createNewTask();
        setTimeout(function () {
            clearInput();
        }, 100);
        preventEventBool = false;
    }
});
//hier wird die "createNewTask" blockieren
document.addEventListener("click", function () {
    if (preventEventBool === false) {
        clickBool = false;
    }
});
//hier wird die "createNewTask" freischalten
userTask.addEventListener("click", function () {
    clickBool = true;
    preventEventBool = true;
});
function createNewTask() {
    //Hinzufügen der Elemente für jede Task
    var container = document.createElement("li");
    container.className = "task";
    var divText = document.createElement("div");
    divText.className = "divText";
    var icon01 = document.createElement("i");
    icon01.className = "far fa-circle";
    var icon02 = document.createElement("i");
    icon02.className = "far fa-check-circle isHidden";
    var text = document.createElement("p");
    text.className = "task-text";
    text.innerHTML = userTask.value;
    var icon03 = document.createElement("i");
    icon03.className = "fas fa-trash-alt";
    //neue HTML-Elemente werden in den Container hinzugefügt
    console.log(document.getElementById("tasks"));
    document.getElementById("tasks").appendChild(container);
    container.appendChild(divText);
    divText.appendChild(icon01);
    divText.appendChild(icon02);
    divText.appendChild(text);
    container.appendChild(icon03);
    //der Task-Zähler wird erhöht und die "tocounter" function aktualisiert
    counting++;
    tocounter();
    //Kreis-, Abhaken- und Lösch-Button Event Listener mit jeweiliger Funktion
    icon01.addEventListener("click", function () {
        icon01.classList.add("isHidden");
        icon02.classList.remove("isHidden");
        text.setAttribute("style", "text-decoration: " + "line-through");
    });
    icon02.addEventListener("click", function () {
        icon02.classList.add("isHidden");
        icon01.classList.remove("isHidden");
        text.setAttribute("style", "text-decoration: " + "none");
    });
    icon03.addEventListener("click", function () {
        document.querySelector("#tasks").removeChild(container);
        console.log(container);
        counting--;
        tocounter();
    });
}
function tocounter() {
    document.querySelector("#counter").innerHTML = counting + " tasks are";
}
function clearInput() {
    userTask.value = "";
}
//# sourceMappingURL=ToDO.js.map