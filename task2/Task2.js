function addTask() {
  var taskInput = document.getElementById("task-text");
  var taskList = document.getElementById("task-list");
  
  if (taskInput.value.trim() !== "") {
    var taskItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
  }
}

function toggleTaskCompletion() {
  var taskText = this.nextElementSibling;
  if (this.checked) {
    taskText.classList.add("completed");
  } else {
    taskText.classList.remove("completed");
  }
}
