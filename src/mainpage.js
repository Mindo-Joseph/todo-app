import createproject from './projectsetup';
import { createtask, deleteTask } from './taskcreation';

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
  taskName.required = true;

  const taskdescription = document.createElement('input');
  taskdescription.setAttribute('type', 'text');
  taskdescription.setAttribute('placeholder', 'Description');
  taskdescription.required = true;

  const dueDate = document.createElement('input');
  dueDate.id = 'dateSelect';
  dueDate.setAttribute('type', 'date');
  dueDate.required = true;

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
  submit.textContent = 'Create';
  submit.addEventListener('click', () => {
    const task = createtask(
      taskName.value, taskdescription.value, dueDate.value, priorityList.value,
    );
    const taskers = JSON.parse(localStorage.getItem('todos')) || [];
    taskers.push(task);
    localStorage.setItem('todos', JSON.stringify(taskers));
  });

  taskForm.appendChild(headTag);
  taskForm.appendChild(taskName);
  taskForm.appendChild(taskdescription);
  taskForm.appendChild(dueDate);
  taskForm.appendChild(priorityList);
  taskForm.appendChild(submit);
  taskdiv.appendChild(taskForm);

  const todoSection = document.getElementById('toDo');
  todoSection.appendChild(taskdiv);

  const disableButton = document.getElementById('new-task');
  disableButton.removeEventListener('click', newTask);
};

const main = () => {
  const todoItemsSection = document.createElement('div');
  todoItemsSection.className = 'main';
  todoItemsSection.id = 'main';

  const tasksWrapper = document.createElement('div');
  tasksWrapper.className = 'taskWrapper';

  const toDo = document.createElement('div');
  toDo.className = 'toDo';
  toDo.id = 'toDo';
  // Section Headers
  // ToDo section
  const toDoHeader = document.createElement('div');
  toDoHeader.className = 'main-header';

  const todoTitle = document.createElement('h4');
  todoTitle.textContent = 'ToDo';

  const newtoDo = document.createElement('button');
  newtoDo.className = 'new-task';
  newtoDo.id = 'new-task';
  newtoDo.textContent = 'New Task';
  newtoDo.addEventListener('click', newTask);
  const todoCardsList = document.createElement('ul');
  todoCardsList.className = 'todo-list';
  todoCardsList.id = 'target';
  todoCardsList.ondragstart = '';

  toDoHeader.appendChild(todoTitle);
  toDo.appendChild(toDoHeader);
  toDo.appendChild(newtoDo);
  toDo.appendChild(todoCardsList);

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

  tasksWrapper.appendChild(done);
  todoItemsSection.appendChild(tasksWrapper);

  const content = document.querySelector('#content');
  content.appendChild(todoItemsSection);
};
const todoCard = (todo) => {
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.draggable = 'true';

  const card = document.createElement('div');
  card.className = 'card';

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'todo-title';

  const action = document.createElement('span');
  action.className = 'action';

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      const done = document.querySelector('.done');
      done.appendChild(card);
      const list = document.querySelector('.todo-list');
      list.removeChild(todoItem);
    }
  });

  const title = document.createElement('span');
  title.textContent = `${todo.taskname}`;
  title.className = 'title';

  const taskDelete = document.createElement('i');
  taskDelete.className = 'fas fa-trash';
  taskDelete.id = 'deletebtn';
  taskDelete.onclick = () => {
    deleteTask();
  };

  action.appendChild(checkbox);
  action.appendChild(title);
  action.appendChild(taskDelete);
  cardTitle.appendChild(action);

  const description = document.createElement('p');
  description.className = 'todo-description';
  description.textContent = `Desc: ${todo.description}`;
  const due = document.createElement('p');
  due.textContent = `Due on: ${todo.date}`;
  const priority = document.createElement('span');
  priority.className = 'todo-priority';
  priority.textContent = `Priority: ${todo.priority}`;

  card.appendChild(cardTitle);
  card.appendChild(description);
  card.appendChild(due);
  card.appendChild(priority);

  todoItem.appendChild(card);
  const todoCardsList = document.querySelector('#target');
  todoCardsList.appendChild(todoItem);

  // const todoDiv = document.querySelector('.toDo');
  // todoDiv.appendChild(todoCardsList);
};
const populatetoDosList = () => {
  for (let i = 0; i < JSON.parse(Object.values(localStorage)).length; i += 1) {
    todoCard(JSON.parse(Object.values(localStorage))[i]);
  }
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
  populatetoDosList();
};

export default createpage;
