export const createtask = (taskname, description, date, priority) => {
  const todo = {
    taskname,
    description,
    date,
    priority,
  };
  return todo;
};
// const taskEvents = (todoItem, checkBoxEventHandler) => {
//   const checkbox = todoItem.querySelector('input[type="checkbox"');
//   const deleteBtn = todoItem.querySelector('.deletebtn');
//   deleteBtn.onclick = deleteTask;
//   checkbox.onchange = checkBoxEventHandler;
// };
export const deleteTask = () => {
  const todo = document.querySelector('.todo-item');
  const ul = todo.parentNode;
  ul.removeChild(todo);
};
// export const completedTask = () => {
//   const task = this.parentNode;
//   const done = document.querySelector('.done');
//   done.appendChild(task);
//   taskEvents(task, IncompleteTask);
// };
// export const IncompleteTask = () => {
//   const task = this.parentNode;
//   const toDo = document.querySelector('#toDo');
//   toDo.appendChild(task);
//   // taskEvents(task, completedTask);
// };

