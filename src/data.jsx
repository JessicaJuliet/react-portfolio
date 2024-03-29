import {nanoid} from "nanoid";
import {FaHtml5, FaJs, FaReact, FaSass, FaShopify, FaGitAlt, FaGlide} from "react-icons/fa";

// Professional projects
import blogImg from "../src/assets/blog-project.jpg";
import coordinatesImg from "../src/assets/coordinate-project.jpg";
import limitedImg from "../src/assets/grey-diamond-release.jpg";
import engagementImg from "../src/assets/engagement-lp-project.jpg";
import educationImg from "../src/assets/education-article-project.jpg";

// Academic Projects
import leafyBeanImg from "../src/assets/the-leafy-bean.jpeg";
import goldDistillersImg from "../src/assets/irish-gold-distillers.jpeg";
import meditrackerImg from "../src/assets/meditracker.jpeg";
import webiImg from "../src/assets/webi.jpeg";




export const links = [
    {id: nanoid(), href: "/", text:"Home"},
    {id: nanoid(), href: "/#skills", text:"Skills"},
    {id: nanoid(), href: "/#about", text:"About"},
    {id: nanoid(), href: "/#projects", text:"Projects"},
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
      text: 'Currently learning and developing my skills in React.js with a strong emphasis on component-based architecture.',
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
      img: blogImg,
      pageLink: "/shopify-blog",
      url: 'https://www.chupi.com/blog',
      github: 'https://github.com/jessicaJuliet',
      title: 'Shopify Blog',
      technology: 'HTML, CSS, JavaScript, SCSS, Liquid, Shopify, Matrixify',
      text: 'Developed a fully responsive blog on Shopify, migrating the existing blog from WordPress, in order to streamline website management.',
    },
    {
      id: nanoid(),
      img: coordinatesImg,
      pageLink: "/coordinates-template",
      url: 'https://www.chupi.com/products/solid-gold-a-moment-in-time-coordinate-ring',
      github: 'https://github.com/jessicaJuliet',
      title: 'Coordinate Product Template',
      technology: 'HTML, CSS, JavaScript, SCSS, Liquid, Shopify, Geocoding API',
      text: 'Built a new product template to faciliate the input of DMS coordinates. Mapped out user journeys and implemented real-time form validation.',
    },
    {
      id: nanoid(),
      img: engagementImg,
      pageLink: "/engagement-page",
      url: 'https://www.chupi.com/pages/engagement',
      github: 'https://github.com/jessicaJuliet',
      title: 'Engagement Page',
      technology: 'HTML, CSS, JavaScript, SCSS, Liquid, Shopify',
      text: 'Developed a new Engagement page which included visually appealing category blocks, detailed product material tabs and a recommended reading section.',
    },
    {
      id: nanoid(),
      img: educationImg,
      pageLink: "/education-hub",
      url: 'https://www.chupi.com/pages/education',
      github: 'https://github.com/jessicaJuliet',
      title: 'Education Hub',
      technology: 'HTML, CSS, SCSS, Liquid, Shopify',
      text: "Crafted a resource to enrich the engagement ring buyer's experience. This blended a captivating design with strategic keyword integration to enhance SEO.",
    },
    {
      id: nanoid(),
      img: limitedImg,
      // pageLink: "/grey-diamond-release",
      url: 'https://www.chupi.com/products/solid-gold-you-me-magic-one-carat-grey-diamond-classic-diamond-polished-band-ring',
      github: 'https://github.com/jessicaJuliet',
      title: 'Limited Edition Release',
      technology: 'HTML, CSS, JavaScript, Liquid, Shopify',
      text: 'Created a limited edition template which dynamically tracked stock, displaying a countdown to the next release, and allowed users to sign up and book appointments.',
    }
  ];




  export const academicProjects = [
    {
      id: nanoid(),
      img: leafyBeanImg,
      url: 'https://jessicajuliet.github.io/the-leafy-bean/',
      github: 'https://github.com/JessicaJuliet/the-leafy-bean',
      title: 'The Leafy Bean',
      technology: 'HTML, CSS, Bootstrap',
    },
    {
      id: nanoid(),
      img: goldDistillersImg,
      url: 'https://jessicajuliet.github.io/irish-gold-distillers/',
      github: 'https://github.com/JessicaJuliet/irish-gold-distillers',
      title: 'Irish Gold Distillers',
      technology: 'HTML, CSS, JavaScript',
    },
    {
      id: nanoid(),
      img: meditrackerImg,
      url: 'https://meditracker-qbfi.onrender.com/',
      github: 'https://github.com/JessicaJuliet/meditracker',
      title: 'Meditracker',
      technology: 'JavaScript, Python, MongoDB, Flask',
    },
    {
      id: nanoid(),
      img: webiImg,
      url: 'https://webi-t0p6.onrender.com/',
      github: 'https://github.com/JessicaJuliet/webi',
      title: 'Webi',
      technology: 'JavaScript, Python, Django',
    },
  ];