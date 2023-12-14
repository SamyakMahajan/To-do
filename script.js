function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.querySelector(".task-list");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = '<div class="task_text"><input type="checkbox" onclick="toggleTask(this)">' + taskInput.value + '</div><span class="delete" onclick="deleteTask(this)">X</span>';
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.classList.toggle("checked");
}

function deleteTask(deleteButton) {
    var listItem = deleteButton.parentNode;
    listItem.remove();
}
