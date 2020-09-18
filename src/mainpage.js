const createpage = () => {
  const sidebar = document.createElement('div');
  sidebar.className = 'side-bar';

  const projectView = document.createElement('div');
  projectView.className = 'project-view';

  const projectIntro = document.createElement('div');
  projectIntro.className = 'project-header';
  const headerText = document.createElement('h1');
  headerText.textContent = 'Projects';
  const addLogo = document.createElement('i');
  addLogo.className = 'fas fa-plus-circle';
  projectIntro.appendChild(headerText);
  projectIntro.appendChild(addLogo);
  projectView.appendChild(projectIntro);
  const content = document.querySelector('#content');
  content.appendChild(sidebar);
  content.appendChild(projectView);
};
export default createpage;
