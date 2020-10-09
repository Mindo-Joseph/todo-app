const addNameToTopOfQueue = (name) => {
  const namesArray = JSON.parse(localStorage.getItem('names')) || [];
  namesArray.unshift(name);
  localStorage.setItem('names', JSON.stringify(namesArray));
};
const getCurrentProjectName = () => {
  const namesArray = JSON.parse(localStorage.getItem('names')) || [];
  return namesArray[0];
};
const createDefaultProject = () => {
  const project = {};
  project.Default = [{ todos: [] }, { done: [] }];
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  addNameToTopOfQueue('Default');
};
const newProject = (name) => {
  const project = {};
  project[name] = [{ todos: [] }, { done: [] }];
  const projectss = JSON.parse(localStorage.getItem('projects')) || [];
  projectss.push(project);
  localStorage.setItem('projects', JSON.stringify(projectss));
  addNameToTopOfQueue(name);
};
const checkForEmptyStorage = () => {
  if (localStorage.length === 0) {
    createDefaultProject();
    window.location.reload();
  }
};
const getProjects = () => {
  const availableProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const projectNames = availableProjects.flatMap((item) => Object.keys(item));
  return projectNames;
};
export {
  newProject, getProjects, addNameToTopOfQueue, getCurrentProjectName, checkForEmptyStorage,
};
