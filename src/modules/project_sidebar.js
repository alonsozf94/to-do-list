import { createProject } from "./project_functions";
import { getProjectList } from "./storage_functions";
import { setCurrentProject } from "./global";
import { renderProjectContent } from "./project_content";

function renderSidebar() {
  // Sidebar Elements
  let sidebar = document.createElement("aside");
  let title = document.createElement("h1");
  let projectListContainer = document.createElement("div");
  let addProjectButton = document.createElement("button");

  // Popup Screen
  let popupScreen = document.createElement("div");
  let newProjectInput = document.createElement("input");
  let buttonContainer = document.createElement("div");
  let createNewProjectButton = document.createElement("button");
  let cancelNewProjectButton = document.createElement("button");
  createNewProjectButton.innerHTML = "Create Project";
  cancelNewProjectButton.innerHTML = "Cancel";
  newProjectInput.value = "";
  popupScreen.appendChild(newProjectInput);
  buttonContainer.appendChild(createNewProjectButton);
  buttonContainer.appendChild(cancelNewProjectButton);
  popupScreen.appendChild(buttonContainer);

  // Setting elements
  title.innerHTML = "Tasker";
  addProjectButton.innerHTML = "+";
  sidebar.appendChild(title);
  sidebar.appendChild(projectListContainer);
  sidebar.appendChild(popupScreen);
  sidebar.appendChild(addProjectButton);

  // Adding existing projects to sidebar
  displayProjectList(projectListContainer);

  // Adding Style
  sidebar.classList.add("project-sidebar");
  title.classList.add("title")
  popupScreen.classList.add("popup-screen", "off");
  addProjectButton.classList.add("add-project");
  buttonContainer.classList.add("button-container");

  // Event listeners
  addProjectButton.addEventListener("click", () => {
    popupScreen.classList.remove("off");
  });
  createNewProjectButton.addEventListener("click", () => {
    if (newProjectInput.value == "") {
      alert("No");
    } else {
      createProject(newProjectInput.value);
      popupScreen.classList.add("off");
      displayProjectList(projectListContainer);
    }
  });
  cancelNewProjectButton.addEventListener("click", () => {
    popupScreen.classList.add("off");
  });

  return sidebar;
}
function displayProjectList(container) {
  let projectList = getProjectList();
  container.innerHTML = "";
  projectList.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.innerHTML = `${project.title}`;
    projectDiv.classList.add("project-block");

    projectDiv.addEventListener("click", () => {
      setCurrentProject(project);
      renderProjectContent(); 
    })

    container.appendChild(projectDiv);
  });
}

export { renderSidebar };
