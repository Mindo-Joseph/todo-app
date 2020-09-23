import datepicker from 'js-datepicker';

import createproject from './projectsetup';
import createtask from './taskcreation';

const newProjectForm = () => {
  const formdiv = document.createElement('div');
  formdiv.className = 'project-form';
  const headTag = document.createElement('h1');
  headTag.textContent = 'New Project';
  const content = document.getElementById('content');
  const projectSection = document.querySelector('.project-view');
  projectSection.appendChild(formdiv);
  content.appendChild(projectSection);

  const messageForm = document.createElement('form');
  messageForm.className = 'form';
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'project name');
  const submit = document.createElement('button');
  submit.className = 'submit-btn';
  submit.onclick = createproject(name.value);
  submit.textContent = 'Create';
  messageForm.appendChild(headTag);
  messageForm.appendChild(name);
  messageForm.appendChild(submit);
  formdiv.appendChild(messageForm);
  const addIcon = document.getElementById('add');
  addIcon.removeEventListener('click', newProjectForm);
};
const newTask = () => {
  const taskdiv = document.createElement('div');
  taskdiv.className = 'project-form';
  const headTag = document.createElement('h1');
  headTag.textContent = 'New Task';
  const taskForm = document.createElement('form');
  taskForm.className = 'form';
  const taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('placeholder', 'task name');
  const taskdescription = document.createElement('input');
  taskdescription.setAttribute('type', 'text');
  taskdescription.setAttribute('placeholder', 'Description');
  const dueDate = document.createElement('input');
  dueDate.id = 'dateSelect';
  dueDate.setAttribute('type', 'date');
  // const pick = datepicker(dueDate);
  const priorityArray = ['High', 'Medium', 'Low'];
  const priorityList = document.createElement('select');
  priorityList.id = 'mySelect';
  for (let i = 0; i < priorityArray.length; i += 1) {
    const option = document.createElement('option');
    option.value = priorityArray[i];
    option.text = priorityArray[i];
    priorityList.appendChild(option);
  }
  const submit = document.createElement('button');
  submit.className = 'submit-btn';
  submit.onclick = createtask(taskName.value,
    taskdescription.value, dueDate.value,
    priorityList.value);
  submit.textContent = 'Create';
  taskForm.appendChild(headTag);
  taskForm.appendChild(taskName);
  taskForm.appendChild(taskdescription);
  taskForm.appendChild(dueDate);
  taskForm.appendChild(priorityList);
  taskForm.appendChild(submit);
  taskdiv.appendChild(taskForm);
  const mainSection = document.getElementById('main');
  mainSection.appendChild(taskdiv);
};
const main = () => {
  const todoItemsSection = document.createElement('div');
  todoItemsSection.className = 'main';
  todoItemsSection.id = 'main';
  const tasksWrapper = document.createElement('div');
  tasksWrapper.className = 'taskWrapper';
  const toDo = document.createElement('div');
  toDo.className = 'toDo';
  // Section Headers
  // ToDo section
  const toDoHeader = document.createElement('div');
  toDoHeader.className = 'main-header';
  const todoTitle = document.createElement('h4');
  todoTitle.textContent = 'ToDo';
  const newtoDo = document.createElement('button');
  newtoDo.className = 'new-task';
  newtoDo.textContent = 'New Task';
  newtoDo.onclick = newTask
  toDoHeader.appendChild(todoTitle);
  toDo.appendChild(toDoHeader);
  toDo.appendChild(newtoDo);
  // InProgress Section
  const inProgress = document.createElement('div');
  inProgress.className = 'in-progress';
  const progressHeader = document.createElement('div');
  progressHeader.className = 'main-header';
  const progressTitle = document.createElement('h4');
  progressTitle.textContent = 'In Progress';
  progressHeader.appendChild(progressTitle);
  inProgress.appendChild(progressHeader);
  // Done
  const done = document.createElement('div');
  done.className = 'done';
  const doneHeader = document.createElement('div');
  doneHeader.className = 'main-header';
  const doneTitle = document.createElement('h4');
  doneTitle.textContent = 'Done';
  const newdone = document.createElement('button');
  newdone.className = 'new-task';
  newdone.textContent = 'New Task';
  doneHeader.appendChild(doneTitle);
  done.appendChild(doneHeader);

  tasksWrapper.appendChild(toDo);
  tasksWrapper.appendChild(inProgress);
  tasksWrapper.appendChild(done);
  todoItemsSection.appendChild(tasksWrapper);
  const content = document.querySelector('#content');
  content.appendChild(todoItemsSection);
};

const createpage = () => {
  const sidebar = document.createElement('div');
  sidebar.className = 'side-bar';

  const projectView = document.createElement('div');
  projectView.className = 'project-view';

  const projectIntro = document.createElement('div');
  projectIntro.className = 'project-header';
  const headerText = document.createElement('h1');
  headerText.className = 'header-text-project';
  const addIcon = document.createElement('i');
  addIcon.className = 'fas fa-plus-circle';
  addIcon.id = 'add';
  addIcon.addEventListener('click', newProjectForm);

  headerText.textContent = 'Projects';
  projectIntro.appendChild(headerText);
  projectIntro.appendChild(addIcon);
  projectView.appendChild(projectIntro);
  // Accordion item
  // Main section
  const navigation = document.createElement('div');
  navigation.className = 'navigation';

  const content = document.querySelector('#content');
  content.appendChild(sidebar);
  content.appendChild(projectView);
  main();
  newTask();
};

export default createpage;
