import SectionTitle from "./SectionTitle";
import AcademicProjectsCard from "./AcademicProjectsCard";
import { academicProjects } from "../data";


const AcademicProjects = () => {
  return (
    <section className="bg-white py-20">
      <div className="align-element">
        <SectionTitle text="Academic Projects" />
      </div>
      <div className="align-element py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {academicProjects.map((project) => {
            return <AcademicProjectsCard key={project.id} {...project} />                
        })}
      </div>
    </section>
  )
}

export default AcademicProjects;