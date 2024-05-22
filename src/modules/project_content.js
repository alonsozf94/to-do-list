import { getCurrentProject } from "./global";
import { createTask, deleteTask } from "./task_functions";

function renderProjectContent() {
  let currentProject = getCurrentProject();

  // Content Elements
  let projectContent = document.querySelector("#project-content");
  let title = document.createElement("h2");
  let popupScreen = document.createElement("div");
  let taskListContainer = document.createElement("div");
  let addTaskButton = document.createElement("button");

  projectContent.innerHTML = "";
  title.innerHTML = currentProject.title;
  title.classList.add("sub-title")
  addTaskButton.innerHTML = "New Task";

  projectContent.appendChild(popupScreen);
  projectContent.appendChild(title);
  projectContent.appendChild(taskListContainer);
  projectContent.appendChild(addTaskButton);

  displayTaskList(currentProject, taskListContainer);
  displayTaskPopup(popupScreen, currentProject);
  popupScreen.classList.add("popup-screen", "off");
  addTaskButton.classList.add("add-task-button");

  addTaskButton.addEventListener("click", () => {
    popupScreen.classList.remove("off");
  });
}

function displayTaskList(currentProject, container) {
  // alert(JSON.stringify(currentProject));
  currentProject.taskList.forEach((task) => {
    let taskBox = document.createElement("div");
    taskBox.innerHTML = `
      <div class="task-info">
        <div>${task.title}</div>
        <div>${task.priority}</div>
      </div>
      <div class="task-options">
        <button type="button" class="delete-task-button">Delete</button>
      </div>
    `;
    taskBox.classList.add("task-box");
    taskBox.querySelector('.delete-task-button').addEventListener("click", () => {
      deleteTask(currentProject, task.title);
      renderProjectContent();
    });
    container.appendChild(taskBox);
  });
}

function displayTaskPopup(container, currentProject) {
  let newTaskForm = document.createElement("div");
  let taskName = document.createElement("input");
  let taskPriority = document.createElement("select");
  let buttonContainer = document.createElement("div");
  let createNewTaskButton = document.createElement("button");
  let cancelNewTaskButton = document.createElement("button");

  taskPriority.innerHTML = `
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  `;
  createNewTaskButton.innerHTML = "Add Task";
  cancelNewTaskButton.innerHTML = "Cancel";

  newTaskForm.appendChild(taskName);
  newTaskForm.appendChild(taskPriority);
  buttonContainer.appendChild(createNewTaskButton);
  buttonContainer.appendChild(cancelNewTaskButton);
  container.appendChild(newTaskForm);
  container.appendChild(buttonContainer);

  buttonContainer.classList.add('button-container');

  // Event listeners
  createNewTaskButton.addEventListener("click", () => {
    if (taskName.value == "" || taskPriority.value == "") {
      alert("No");
    } else {
      createTask(currentProject, taskName.value, taskPriority.value);
      container.classList.add("off");
      renderProjectContent();
    }
  });
  cancelNewTaskButton.addEventListener("click", () => {
    container.classList.add("off");
  });
}

export { renderProjectContent };