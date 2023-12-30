import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";
import { professionalProjects } from "../data";



const ProfessionalProjects = () => {
  return (
    <section className="py-20 align-element" id="projects">
        <SectionTitle text="Web Creations" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {professionalProjects.map((professionalProject) => {
                return <ProjectsCard key={professionalProject.id} {...professionalProject} />                
            })}
        </div>
    </section>
  )
}

export default ProfessionalProjects;