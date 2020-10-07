
// const projects = [
//   {
//     projo1: [
//       { todos: [{ taskname: "Task1", date: "123" }] },
//       { done: [{ taskname: "Task2", date: "12345" }] },
//     ],
//   },
// ];
// // console.log(projects[0]["projo1"][1]['done'].length);
// console.log(JSON.stringify(projects));
const addNameToTopOfQueue = (name) => {
  const namesArray = JSON.parse(localStorage.getItem('names')) || [];
  namesArray.unshift(name);
  localStorage.setItem('names',JSON.stringify(namesArray))

}
const getCurrentProjectName = () => {
  const namesArray = JSON.parse(localStorage.getItem('names')) || [];
  return namesArray[0];
}
const newProject = (name) => {
    let project = {};
    project[name] = [{'todos':[]},{'done':[]}];
    const projectss = JSON.parse(localStorage.getItem('projects')) || [];
    projectss.push(project)
    localStorage.setItem('projects',JSON.stringify(projectss));
    addNameToTopOfQueue(name);
}

// newProject("projo")
// console.log(projects);
// console.log(projects.find(item => item['projo']));
const populatetoDosList = (items, target) => {
  for (let i = 0; i < items.length; i += 1) {
    todoCard(items[i], `${target}`);
  }
};

const getProjects = () => {
  const availableProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const projectNames = availableProjects.flatMap(item => Object.keys(item));
  return projectNames
}
export {newProject,getProjects,addNameToTopOfQueue,getCurrentProjectName};