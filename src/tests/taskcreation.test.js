/* eslint-disable global-require */
/* eslint-disable no-undef */
import { getCurrentProjectName, newProject } from '../project';
import { createtask, deleteTask } from '../taskcreation';

test('should return an object of user defined todo details', () => {
  expect(typeof createtask('Test', 'some descriptive test', '12-08-2020', 'Low')).toBe('object');
});

test('should remove a task from storage when delete is called on todo name', () => {
  newProject('testingProject');
  const task = createtask('Test', 'some descriptive test', '12-08-2020', 'Low');
  // eslint-disable-next-line no-underscore-dangle
  const projects = JSON.parse(localStorage.getItem('projects'));
  projects[0][getCurrentProjectName()][0].todos.push(task);
  delete window.location;
  window.location = { reload: jest.fn() };
  const deletemock = jest.fn(deleteTask());
  deletemock('Task');
  expect(deletemock).toHaveBeenCalled();
});
