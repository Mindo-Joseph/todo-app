/* eslint-disable no-undef */
import { getCurrentProjectName, newProject } from '../project';
import { createtask, deleteTask } from '../taskcreation';

test('should return an object of user defined todo details', () => {
  expect(typeof createtask('Test', 'some descriptive test', '12-08-2020', 'Low')).toBe('object');
});

test('should remove a task from storage when delete is called on todo name', () => {
  newProject('testingProject');
  const task = createtask('Test', 'some descriptive test', '12-08-2020', 'Low');
  const arr = JSON.parse(localStorage.getItem('projects'));
  arr[0][getCurrentProjectName()][0].todos.push(task);
  deleteTask('Test');
  expect(arr[0][getCurrentProjectName()][0].todos.length).toBe(0);
});
