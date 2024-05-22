import _ from 'lodash'
import './style.css';
import { createProject, getProject } from './modules/project_functions';
import { createTask } from './modules/task_functions';
import { renderSidebar } from './modules/project_sidebar'
import { setCurrentProject } from './modules/global';
import { renderProjectContent } from './modules/project_content';

function component() {
  setCurrentProject(getProject(0));
  const content = document.querySelector('.content');
  const projectContent = document.createElement('div');
  projectContent.setAttribute('id',"project-content")
  const mySidebar = renderSidebar();
  content.appendChild(mySidebar);
  content.appendChild(projectContent);
  renderProjectContent();

  return content;
}

let todayProject = createProject("Today");
let tomorrowProject = createProject("Tomorrow");

createTask(todayProject, 'First Task', 'High');
createTask(todayProject, 'Second Task', 'Low');
createTask(tomorrowProject, 'Random Task', 'Mid');

document.body.appendChild(component());