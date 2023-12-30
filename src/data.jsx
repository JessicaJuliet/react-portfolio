import {nanoid} from "nanoid";
import {FaHtml5, FaJs, FaReact, FaSass, FaShopify, FaGitAlt, FaGlide} from "react-icons/fa";

export const links = [
    {id: nanoid(), href: "#home", text:"Home"},
    {id: nanoid(), href: "#skills", text:"Skills"},
    {id: nanoid(), href: "#about", text:"About"},
    {id: nanoid(), href: "#projects", text:"Projects"},
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




  export const professionalProjects = [
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/jessicaJuliet',
      title: 'first project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/jessicaJuliet',
      title: 'second project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/jessicaJuliet',
      title: 'third project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
  ];




  export const projects = [
    {
      id: nanoid(),
      img: "src/assets/the-leafy-bean.jpeg",
      url: 'https://jessicajuliet.github.io/the-leafy-bean/',
      github: 'https://github.com/JessicaJuliet/the-leafy-bean',
      title: 'The Leafy Bean',
      technology: 'HTML, CSS, Bootstrap',
    },
    {
      id: nanoid(),
      img: "src/assets/irish-gold-distillers.jpeg",
      url: 'https://jessicajuliet.github.io/irish-gold-distillers/',
      github: 'https://github.com/JessicaJuliet/irish-gold-distillers',
      title: 'Irish Gold Distillers',
      technology: 'HTML, CSS, JavaScript',
    },
    {
      id: nanoid(),
      img: "src/assets/meditracker.jpeg",
      url: 'https://meditracker-qbfi.onrender.com/',
      github: 'https://github.com/JessicaJuliet/meditracker',
      title: 'Meditracker',
      technology: 'JavaScript, Python, MongoDB, Flask',
    },
    {
      id: nanoid(),
      img: "src/assets/webi.jpeg",
      url: 'https://webi-t0p6.onrender.com/',
      github: 'https://github.com/JessicaJuliet/webi',
      title: 'Webi',
      technology: 'JavaScript, Python, Django',
    },
  ];