import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";


const Projects = () => {
  return (
    <section className="bg-white py-20">
        <div className="align-element">
            <SectionTitle text="Academic Projects" />
        </div>
        <div className="align-element py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => {
                return <ProjectsCard key={project.id} {...project} />                
            })}
        </div>
    </section>
  )
}

export default Projects;