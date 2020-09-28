const createtask = (tasksArray, taskname, description, date, priority) => {
  const todo = {
    taskname,
    description,
    date,
    priority,
  };
  tasksArray.push(todo);
};

export default createtask;
