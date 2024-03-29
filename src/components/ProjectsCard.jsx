import {FaGithubSquare} from "react-icons/fa";
import {TbWorldWww} from "react-icons/tb";
import {FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = ({url, img, pageLink, github, title, technology, text}) => {
  return (
    <Link to={pageLink}>
        <article className="bg-white rounded-lg shadow-md hover:shadow-2xl duration-300">
            <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64"/>
            <div className="p-8">
                <h2 className="text-xl tracking-wide capitalize font-medium">{title}</h2>
                <p className="my-4 text-slate-700 capitalize leading-loose font-light"><b>Technologies:</b> {technology}</p>
                <p className="my-4 text-slate-700 leading-loose">{text}</p>
                <div className="flex justify-end">
                    <FaArrowRight className="h-5 w-5 text-slate-900 hover:text-slate-500 duration-300" />
                </div>
                {/* <div className="mt-4 flex gap-x-4">
                    <a href={url}>
                        <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-950 duration-300" />
                    </a>
                    <a href={github}>
                        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-950 duration-300" />
                    </a>
                </div> */}
            </div>
        </article>
    </Link>
  )
}

export default ProjectsCard;