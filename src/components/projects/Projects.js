import "./Projects.css";
import Project from "../project/Project";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div id="projects" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Lorem ipsum dolor, elit.</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at
          eveniet dolorem provident, repellendus sint! Accusantium est nulla,
          tempore doloremque non consequatur ut itaque autem nam facilis ipsam
          dolor ullam?
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
