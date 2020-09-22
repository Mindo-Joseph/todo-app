import createproject from './projectsetup';

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
};

export default createpage;
