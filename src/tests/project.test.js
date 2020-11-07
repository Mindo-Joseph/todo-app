/* eslint-disable no-undef */
import { getCurrentProjectName, getProjects, newProject } from '../project';

test('should create a new project and save it', () => {
  newProject('testProject');
  expect(Object.keys(JSON.parse(localStorage.getItem('projects'))[0])).toStrictEqual(['testProject']);
});

test('should return an array of project names', () => {
  expect(Array.isArray(getProjects())).toBe(true);
});

test('should return the current project name as a string', () => {
  expect(typeof getCurrentProjectName()).toBe('string');
});
