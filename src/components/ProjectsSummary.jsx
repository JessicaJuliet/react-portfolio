import { MdDateRange } from "react-icons/md";



const ProjectsSummary = ({industry, date, tech}) => {
  return (
    <div className="py-5 text-slate-700 leading-loose">
      <p className="py-1 grid grid-cols-[12%_minmax(auto,_1fr)]">
        <b>Industry:</b> {industry}
      </p>
      <p className="py-1 grid grid-cols-[12%_minmax(auto,_1fr)]">
        <b>Date:</b> {date}
      </p>
      <p className="py-1 grid grid-cols-[12%_minmax(auto,_1fr)]">
        <b>Technologies:</b> {tech}
      </p>
    </div>
  )
}

export default ProjectsSummary;