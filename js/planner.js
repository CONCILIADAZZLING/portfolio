let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function showTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    if (tasks[i].done) {
      li.classList.add("done");
    }

    const text = document.createElement("span");
    text.textContent = tasks[i].text;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = tasks[i].done ? "Undo" : "Complete";
    doneBtn.addEventListener("click", function () {
      toggleTask(i);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteTask(i);
    });

    li.appendChild(text);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") {
    return;
  }
  tasks.push({ text: value, done: false });
  taskInput.value = "";
  showTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

addBtn.addEventListener("click", addTask);