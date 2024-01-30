import { FaExternalLinkAlt } from "react-icons/fa";



const ProjectsSummary = ({industry, date, tech, url}) => {
  return (
    <div className="py-5 text-slate-700 leading-loose">
      <p className="py-1 md:grid md:grid-cols-[25%_minmax(auto,_70%)] gap-5">
        <b>Industry:</b> {industry}
      </p>
      <p className="py-1 md:grid md:grid-cols-[25%_minmax(auto,_70%)] gap-5">
        <b>Date:</b> {date}
      </p>
      <p className="py-1 md:grid md:grid-cols-[25%_minmax(auto,_70%)] gap-5">
        <b>Technologies:</b> {tech}
      </p>
      <p className="py-1">
        <a href={url} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="inline align-baseline mr-3" />
          {url}
        </a>
      </p>
    </div>
  )
}

export default ProjectsSummary;