
import { createtask, deleteTask } from './taskcreation';
import {newProject,getProjects,addNameToTopOfQueue,getCurrentProjectName} from './test';
const clearSection = () => {
  const content = document.querySelector('#target');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};
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
  const projectbtns = document.createElement('div');
  projectbtns.className = 'projectbtns';
  const submit = document.createElement('button');
  submit.className = 'submit-btn';
  submit.textContent = 'Create';
  submit.addEventListener('click', () => {
    newProject(name.value);
    
  });
  const cancel = document.createElement('button');
  cancel.className = 'submit-btn cancel';
  cancel.textContent = 'Cancel';
  const buttonsdiv = document.createElement('div');
  buttonsdiv.className = 'buttonsDiv';
  buttonsdiv.appendChild(submit);
  buttonsdiv.appendChild(cancel);
  messageForm.appendChild(headTag);
  messageForm.appendChild(name);
  messageForm.appendChild(buttonsdiv);
  formdiv.appendChild(messageForm);

  const addIcon = document.getElementById('add');
  addIcon.removeEventListener('click', newProjectForm);
};
const newTask = () => {
  clearSection();
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
    const arr = JSON.parse(localStorage.getItem('projects'))
    for (let index = 0; index < arr.length; index+=1) {
      // const title = document.querySelector('.project-name');
      // console.log(title.textContent);
      if (Object.keys(arr[index])[0] === getCurrentProjectName()) {
       
        arr[index][getCurrentProjectName()][0]["todos"].push(task);

      }
      
    };
    localStorage.setItem('projects', JSON.stringify(arr));
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
const getTasks = (projectname) => {
  const availableProjects = JSON.parse(localStorage.getItem('projects') )|| [];
  const project = availableProjects.find(item => item[`${projectname}`])
  const todos = project[projectname][0]['todos'] || [];
  const done = project[projectname][1]['done'] || [];
  todos.forEach(elem => todoCard(elem,'#target'))
  done.forEach(elem =>  todoCard(elem,'.done'))

}
const main = () => {
  const todoItemsSection = document.createElement('div');
  todoItemsSection.className = 'main';
  todoItemsSection.id = 'main';

  const tasksWrapper = document.createElement('div');
  tasksWrapper.className = 'taskWrapper';

  const toDo = document.createElement('div');
  toDo.className = 'toDo';
  toDo.id = 'toDo';

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
export const todoCard = (todo, target) => {
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.draggable = 'true';

  const card = document.createElement('div');
  card.className = 'card';

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'todo-title';

  const action = document.createElement('span');
  action.className = 'action';
  const title = document.createElement('span');
  title.textContent = `${todo.taskname}`;
  title.className = 'title';
  title.id = 'taskTitle';
  const taskDelete = document.createElement('button');
  const icon = document.createElement('i');
  icon.className = 'fas fa-trash';
  taskDelete.appendChild(icon);
  taskDelete.id = 'deletebtn';
  taskDelete.addEventListener('click', () => {
    deleteTask(title);
  });
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      // const projects = JSON.parse(localStorage.getItem('projects')) || [];
      // for (let i = 0; i < todos.length; i += 1) {
      //   if (todos[i].taskname === title.textContent) {
      //     const done = JSON.parse(localStorage.getItem('done')) || [];
      //     done.push(todos[i]);
      //     localStorage.setItem('done', JSON.stringify(done));
      //     todos.splice(i, 1);
      //     localStorage.setItem('todos', JSON.stringify(todos));
      //   }
      // }
      const arr = JSON.parse(localStorage.getItem('projects'))
      for (let index = 0; index < arr.length; index+=1) {
        if (Object.keys(arr[index])[0] === getCurrentProjectName()) {
       
          const tasks = arr[index][getCurrentProjectName()][0]["todos"];
          for (let i = 0; i < tasks.length; i += 1) {
            if (tasks[i].taskname === title.textContent){
                const done = arr[index][getCurrentProjectName()][1]["done"];
                done.push(tasks[i]);
                tasks.splice(i,1);
                localStorage.setItem('projects', JSON.stringify(arr));
                location.reload();

            }
   
          }
  
        }
        
    };
     
      const done = document.querySelector('.done');
      done.appendChild(todoItem);
      // const list = document.querySelector('.todo-list');
      // list.removeChild(todoItem);
    }
  });

  action.appendChild(checkbox);
  action.appendChild(title);
  action.appendChild(taskDelete);
  cardTitle.appendChild(action);

  const description = document.createElement('p');
  description.className = 'todo-description';
  description.textContent = `Desc: ${todo.description}`;
  const due = document.createElement('p');
  due.textContent = `${todo.date}`;
  const priority = document.createElement('span');
  priority.className = 'todo-priority';
  priority.textContent = `Priority: ${todo.priority}`;

  card.appendChild(cardTitle);
  card.appendChild(description);
  card.appendChild(due);
  card.appendChild(priority);

  todoItem.appendChild(card);
  const todoCardsList = document.querySelector(`${target}`);
  todoCardsList.appendChild(todoItem);
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
  
  const displayProjects = document.createElement('div');
  displayProjects.className = 'projectsWrapper';
  const names = getProjects();
  names.forEach(name => {
    const title = document.createElement('button');
    title.className = 'project-name';
    title.textContent = name;
    displayProjects.appendChild(title);

  })

  projectIntro.appendChild(headerText);
  projectIntro.appendChild(addIcon);
  projectView.appendChild(projectIntro);
  projectView.appendChild(displayProjects);
  
  
  
  const content = document.querySelector('#content');
  content.appendChild(sidebar);
  content.appendChild(projectView);
  main();
  const buttons = document.querySelectorAll('.project-name');
  buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', () => {
      addNameToTopOfQueue(currentBtn.textContent)
      location.reload();
    })
  });
 
  getTasks(getCurrentProjectName());
};

export default createpage;
