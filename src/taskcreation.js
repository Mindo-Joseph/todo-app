/* eslint-disable no-restricted-globals */
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
  const todos = JSON.parse(Object.values(localStorage)[0]);
  const done = JSON.parse(Object.values(localStorage)[1]);
  if (todos.some((task) => task.taskname === title.textContent)) {
    const idx = todos.findIndex((task) => task.taskname === title.textContent);
    todos.splice(idx, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    location.reload();
    return false;
  }
  const idx = done.findIndex((task) => task.taskname === title.textContent);
  done.splice(idx, 1);
  localStorage.setItem('done', JSON.stringify(done));
  location.reload();
  return false;
};
export default createtask;
