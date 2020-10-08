/* eslint-disable no-restricted-globals */
import { getCurrentProjectName } from "./test";
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
  const arr = JSON.parse(localStorage.getItem("projects"));
  for (let index = 0; index < arr.length; index += 1) {
    if (Object.keys(arr[index])[0] === getCurrentProjectName()) {
      const todos = arr[index][getCurrentProjectName()][0]["todos"];
      const done = arr[index][getCurrentProjectName()][1]["done"];
      if (todos.some((task) => task.taskname === title.textContent)) {
        const idx = todos.findIndex(
          (task) => task.taskname === title.textContent
        );
        todos.splice(idx, 1);
        localStorage.setItem("projects", JSON.stringify(arr));
        location.reload();
        return false;
      }
      const idx = done.findIndex((task) => task.taskname === title.textContent);
      done.splice(idx, 1);
      localStorage.setItem("projects", JSON.stringify(arr));
      location.reload();
      return false;
    }
  }
};

export default createtask;
