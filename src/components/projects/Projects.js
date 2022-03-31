import "./Projects.css";
import Project from "../project/Project";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div id="projects" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects.</h1>
        <p className="pl-desc">
        Take a look at some of the work I've done recently !
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
