import {FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-emerald-100 py-24 items-center gap-8">
        <p className="text-slate-500 text-center md:max-w-96 align-element">&copy; Portfolio developed with care by me, using Vite, React.js & Tailwind CSS</p>
        <div className="flex justify-center gap-x-4 mt-4">
            <a href="https://github.com/JessicaJuliet" target="_blank" rel="noreferrer">
                <FaGithubSquare  className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
            </a>
            <a href="https://www.linkedin.com/in/jessicaakomfrah/" target="_blank" rel="noreferrer">
                <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
            </a>
        </div>
    </div>
  )
}

export default Footer;