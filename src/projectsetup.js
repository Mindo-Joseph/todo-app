const createproject = (projectname) => ({
  projectname,
  setProjectName() {
    this.projectname = projectname;
    return this;
  },
});
export default createproject;
