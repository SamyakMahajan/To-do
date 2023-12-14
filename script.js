// Load tasks from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.querySelector(".task-list");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = '<div class="task_text"><input type="checkbox" onclick="toggleTask(this)">' + taskInput.value + '</div><span class="delete" onclick="deleteTask(this)">X</span>';
        taskList.appendChild(newTask);
        taskInput.value = "";

        // Save tasks to local storage
        saveTasks();
    }
}

function toggleTask(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.classList.toggle("checked");

    // Save tasks to local storage after toggling
    saveTasks();
}

function deleteTask(deleteButton) {
    var listItem = deleteButton.parentNode;
    listItem.remove();

    // Save tasks to local storage after deletion
    saveTasks();
}

// Save tasks to local storage
function saveTasks() {
    var taskList = document.querySelector(".task-list");
    var tasks = [];

    // Extract task text and checked status
    taskList.querySelectorAll("li").forEach(function(taskItem) {
        var taskText = taskItem.querySelector(".task_text").textContent;
        var isChecked = taskItem.classList.contains("checked");
        tasks.push({ text: taskText, checked: isChecked });
    });

    // Save tasks to local storage as JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    var taskList = document.querySelector(".task-list");
    var storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);

        tasks.forEach(function(task) {
            var newTask = document.createElement("li");
            newTask.innerHTML = '<div class="task_text"><input type="checkbox" onclick="toggleTask(this)">' + task.text + '</div><span class="delete" onclick="deleteTask(this)">X</span>';

            if (task.checked) {
                newTask.classList.add("checked");
            }

            taskList.appendChild(newTask);
        });
    }
}
