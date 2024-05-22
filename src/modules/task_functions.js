// Imports
import { setCurrentProject } from "./global";
import { updateProject } from "./project_functions";
// CRUD
function createTask(project, title, priority) {
  let newTask = {
    title: title,
    priority: priority,
  };
  project.taskList.push(newTask);
  updateProject(project.id, project);
}

function deleteTask(project, title) {
  let newArray = project.taskList.filter((task) => task.title !== title );
  project.taskList = newArray;
  updateProject(project.id, project);
  setCurrentProject(project);
}

export { createTask, deleteTask };
