const accItem = document.getElementsByClassName('accordionItem');
const accHD = document.getElementsByClassName('accordionItemHeading');
for (let i = 0; i < accHD.length; i += 1) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  const itemClass = this.parentNode.className;
  for (let i = 0; i < accItem.length; i += 1) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass === 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}
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
  headerText.textContent = 'Projects';
  projectIntro.appendChild(headerText);
  projectIntro.appendChild(addIcon);
  projectView.appendChild(projectIntro);
  // Accordion item
  const accordionWrapper = document.createElement('div');
  accordionWrapper.className = 'accordionWrapper';
  const accordionItem = document.createElement('div');
  accordionItem.className = 'accordionItem open';
  const completeProjects = document.createElement('h3');
  completeProjects.className = 'accordionItemHeading';
  completeProjects.textContent = 'Completed Projects';
  const accordionItemContent = document.createElement('div');
  accordionItemContent.className = 'accordionItemContent';
  const contentText = document.createElement('p');
  contentText.textContent = 'Some cool content';
  const closeAccordion = document.createElement('div');
  closeAccordion.className = 'accordionItem close';
  accordionItemContent.appendChild(contentText);
  accordionItem.appendChild(completeProjects);
  accordionItem.appendChild(accordionItemContent);
  accordionWrapper.appendChild(accordionItem);
  accordionWrapper.appendChild(closeAccordion);
  projectView.appendChild(accordionWrapper);
  const content = document.querySelector('#content');
  content.appendChild(sidebar);
  content.appendChild(projectView);
};
export default createpage;
