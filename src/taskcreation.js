import { getCurrentProjectName } from './project';

export const createtask = (taskname, description, date, priority) => {
  const todo = {
    taskname,
    description,
    date,
    priority,
    id: Date.now(),
  };
  return todo;
};
export const deleteTask = (title) => {
  const arr = JSON.parse(localStorage.getItem('projects'));
  for (let index = 0; index < arr.length; index += 1) {
    if (Object.keys(arr[index])[0] === getCurrentProjectName()) {
      const { todos } = arr[index][getCurrentProjectName()][0];
      const { done } = arr[index][getCurrentProjectName()][1];
      if (todos.some((task) => task.taskname === title.textContent)) {
        const idx = todos.findIndex(
          (task) => task.taskname === title.textContent,
        );

        todos.splice(idx, 1);
        localStorage.setItem('projects', JSON.stringify(arr));
        window.location.reload();
        return false;
      }
      const idx = done.findIndex((task) => task.taskname === title.textContent);
      done.splice(idx, 1);
      localStorage.setItem('projects', JSON.stringify(arr));
      window.location.reload();
      return false;
    }
  }
  return false;
};
export const markTaskAsDone = (taskname) => {
  const arr = JSON.parse(localStorage.getItem('projects'));
  for (let index = 0; index < arr.length; index += 1) {
    if (Object.keys(arr[index])[0] === getCurrentProjectName()) {
      const tasks = arr[index][getCurrentProjectName()][0].todos;
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].taskname === taskname.textContent) {
          const { done } = arr[index][getCurrentProjectName()][1];
          done.push(tasks[i]);
          tasks.splice(i, 1);
          localStorage.setItem('projects', JSON.stringify(arr));
          window.location.reload();
        }
      }
    }
  }
};
export default createtask;
