// Functions for local storage

function addProjectToLocalStorage(project) {
  localStorage.setItem(project.id, JSON.stringify(project));
}
function getProjectList() {
  let projectList = [];
  
  var localStoragekeys = Object.keys(localStorage);
  localStoragekeys.forEach(function(key) {
    projectList.push(JSON.parse(localStorage.getItem(key)));
  });

  return projectList;
}

export { addProjectToLocalStorage, getProjectList };