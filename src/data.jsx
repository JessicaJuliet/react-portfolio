import {nanoid} from "nanoid";
import {FaHtml5, FaJs, FaReact, FaSass, FaShopify, FaGitAlt, FaGlide} from "react-icons/fa";

export const links = [
    {id: nanoid(), href: "#home", text:"Home"},
    {id: nanoid(), href: "#skills", text:"Skills"},
    {id: nanoid(), href: "#about", text:"About"},
    {id: nanoid(), href: "#my-work", text:"My Work"},
];



export const skills = [
    {
      id: nanoid(),
      title: 'HTML & CSS',
      icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
      text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'SCSS',
        icon: <FaSass className='h-16 w-16 text-emerald-500' />,
        text: 'Highly skilled in SCSS, crafting maintainable and efficient stylesheets for web pages.',
    },
    {
      id: nanoid(),
      title: 'Javascript',
      icon: <FaJs className='h-16 w-16 text-emerald-500' />,
      text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions.',
    },
    {
      id: nanoid(),
      title: 'React',
      icon: <FaReact className='h-16 w-16 text-emerald-500' />,
      text: 'Advanced proficiency in React, with a strong emphasis on component-based architecture.',
    },
    {
        id: nanoid(),
        title: 'Version Control',
        icon: <FaGitAlt className='h-16 w-16 text-emerald-500' />,
        text: 'Expert in version control using Git, ensuring collaborative and efficient development workflows.',
    },
    {
        id: nanoid(),
        title: 'Shopify',
        icon: <FaShopify className='h-16 w-16 text-emerald-500' />,
        text: 'Proficient in Shopify development, excelling in developing custom designs for visually appealing e-commerce solutions.',
    }
  ];
  