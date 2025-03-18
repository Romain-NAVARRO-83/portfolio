import db from "../../models/index.js";

const { Project } = db;

const mainController = {
  homePage: async (req, res) => {
    try {
      // Fetch all projects from the database
      const projects = await Project.findAll();
      res.render("index", { title: "Portfolio", projects });
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  projectPage: async (req, res) => {
    const projectId = req.params['id'];
    try{
      const project = await Project.findByPk(parseInt(projectId));
      res.render("project", { title: `Project-${project.title}`, project:project });
    }catch(e){
      console.error("Error fetching project:", e);
      res.status(500).send("Internal Server Error");
    }
  },
  error404Page: async (req,res)=>{
    res.render("error404");
  }
};

export default mainController;
