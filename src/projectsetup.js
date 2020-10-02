const createproject = (projectname) => {
  const project = {
    projectname,
    setProjectName() {
      this.projectname = projectname;
      return this;
    },
  };

  return project;
};
export default createproject;
