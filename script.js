let taskList = [];
function addTask() {
  let newTask = document.getElementById("taskInput").value;
  if (taskList.includes(newTask)) {
    alert("Task already exists!");
  } else {
    taskList.push(newTask);
    document.getElementById("taskInput").value = "";
    displayTasks();
  }
}
function removeTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}
function displayTasks() {
  let taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let taskItem = document.createElement("li");
    taskItem.innerText = taskList[i];
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.onclick = function() { removeTask(i) };
    taskItem.appendChild(removeButton);
    taskListElement.appendChild(taskItem);
  }
}
