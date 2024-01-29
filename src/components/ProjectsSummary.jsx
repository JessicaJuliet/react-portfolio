import { MdDateRange } from "react-icons/md";



const ProjectsSummary = ({industry, date, tech}) => {
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
    </div>
  )
}

export default ProjectsSummary;


// const ProjectsSummary = ({industry, date, tech}) => {
//   return (
//     <div className="py-5 text-slate-700 leading-loose">
//       <p className="py-1 gap-2 grid grid-cols-1 md:grid-cols-[15%_minmax(auto,_40%)]">
//         <b>Industry:</b> {industry}
//       </p>
//       <p className="py-1 gap-2 grid grid-cols-1 md:grid-cols-[15%_minmax(auto,_40%)]">
//         <b>Date:</b> {date}
//       </p>
//       <p className="py-1 gap-2 grid grid-cols-1 md:grid-cols-[15%_minmax(auto,_40%)]">
//         <b>Technologies:</b> {tech}
//       </p>
//     </div>
//   )
// }