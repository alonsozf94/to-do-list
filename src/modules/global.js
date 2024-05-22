// Global variables
let projectCounter = 0;
let currentProject = {};

// Access to variables
function getCounter() {
  return projectCounter;
}
function updateCounter() {
  if (projectCounter === 0) {
    projectCounter++;
  } else {
    let idList = Object.keys(localStorage);
    idList.sort(function (a, b) {
      return a - b;
    });
    projectCounter = Number(idList[idList.length - 1]) + 1;
  }
}
function getCurrentProject() {
  return currentProject;
}
function setCurrentProject(project) {
  currentProject = project;
}

export { getCurrentProject, setCurrentProject, getCounter, updateCounter };
