const createtask = (taskname, description, date, priority) => {
  const todo = {
    taskname,
    description,
    date,
    priority,
    id: Date.now(),
  };
  return todo;
};

export default createtask;
