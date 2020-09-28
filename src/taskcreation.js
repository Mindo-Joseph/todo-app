const createtask = (taskname, description, date, priority) => {
  const todo = {
    taskname,
    description,
    date,
    priority,
  };
  return todo;
};
// export const deletetask = () => {
//   console.log('Task Deleted');
// };
// export const edittask = () => {
//   console.log('Task Edited');

// };
// export const completeTask = () => {
//   console.log('Task Completed');
// };
export default createtask;
