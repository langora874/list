
var taskInput = [];

function addTask() {
    var task = document.getElementById('taskInput').value;
    var choices = document.getElementById('choices').value;
    var chosen = document.getElementById('taskList').innerHTML;
    taskInput.push({ item: task, choices });

    let listitem = createElement('')
    if (choices === "High") {
        chosen.style.backgroundColor = "red"
    } else if (choices === "Medium") {
        chosen.style.backgroundColor = "pink"
    } else {
        chosen.style.backgroundColor = "black"

    }

    document.getElementById('').innerHTML = totalincome;
    document.getElementById('').innerHTML = totalexpense;



}


