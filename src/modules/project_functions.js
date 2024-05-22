// Imports
import {getCounter, updateCounter} from "./global";
import { addProjectToLocalStorage, getProjectList } from "./storage_functions";

// CRUD
function createProject(title) {
  let newProject = {
    id: getCounter(),
    title: title,
    taskList: [],
  };

  updateCounter();
  
  if (getProjectList().map((project) => project.title).includes(title)) {
    console.log("Already exists");
  } else {
    addProjectToLocalStorage(newProject);
  }

  return newProject;
}
function getProject(id) {
  // Get project from localstorage and show it
  const project = JSON.parse(localStorage.getItem(id));
  return project;
}
function updateProject(id, updatedProject) {
  let selectedProject = getProject(id);
  selectedProject = updatedProject;
  localStorage.setItem(id, JSON.stringify(selectedProject));
}
// Export
export { createProject, getProject, updateProject };
