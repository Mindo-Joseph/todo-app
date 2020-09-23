const createtask = (taskname, description, date, priority) => ({
  setTask() {
    this.taskname = taskname;
    this.description = description;
    this.date = date;
    this.priority = priority;
    return this;
  },
});
export default createtask;
