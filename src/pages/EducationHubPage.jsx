import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import ProjectsSummary from '../components/ProjectsSummary';

// Media imports
import educationHub from "../assets/educationMedia/education-hub.png";
import educationHubDesktop from "../assets/educationMedia/education-hub-desk.png";
import educationCards from "../assets/educationMedia/education-cards.png";
import educationCards2 from "../assets/educationMedia/education-cards-2.png";
import educationArticle from "../assets/educationMedia/education-article.png";
import educationArticleVideo from "../assets/educationMedia/educationVideo.gif";


const EducationHubPage = () => {
    return (
        <>
        <Navbar />
        <section className='bg-white text-slate-600'>
          <div className='px-5 md:pt-20 md:px-16 border-b-2 border-b-black-900'>
            <div className="grid m-auto md:grid-cols-2 md:max-w-screen-lg md:gap-36">
              <div className='pt-12'>
                <SectionTitle text="Education Hub" />
                <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, SCSS, Liquid, Shopify" url="https://www.chupi.com/pages/education" />
              </div>
              <div>
                <img src={educationHub} className="w-[31rem] h-[31rem] object-cover object-top" />
              </div>
            </div>
          </div>

          <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full md:py-20 bg-slate-50 border-b-2 border-b-black-900">
            <img src={educationHubDesktop} alt='Education Hub' className='m-auto md:max-w-screen-lg'/>
            <article className="m-auto md:max-w-2xl leading-loose">
              <SectionSubtitle text="The Problem" />
              <p className='mt-2'>
                Choosing the perfect engagement or wedding ring can be challenging, particularly when it comes to understanding the different types of diamonds and shopping sustainably. To combat these difficulties and aid the user’s shopping journey, we identified the need for a centralised page where shoppers could access educational articles without the need to sift through our artchive of blog posts.
              </p>
            </article>
          </div>

          <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full max-px-16 md:py-20 border-b-2 border-b-black-900">
            <article className="m-auto md:max-w-2xl leading-loose">
              <SectionSubtitle text="The Solution" />
              <p className='mt-2'>
                Working closely alongside the UX team, I translated figma designs into code and developed a fully responsive Education Hub and article template, ensuring an optimal browsing experience across platforms.
              </p>
              <p className='mt-2'>
                These blended a captivating design with strategic keywords to not only enhance the website's search engine visibility, but also empower users with relevant and discoverable educational resources to guide them along their buyer's journey. 
              </p>
              <p className='mt-2'>
                Furthermore, the education articles incorporated a dynamic scrolling sidebar containing article headings, facilitating seamless user navigation to specific sections of interest within the content.
              </p>
            </article>

            <div className="m-auto mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:max-w-screen-lg">
              <img src={educationHub} alt="Education hub" />
              <img src={educationCards} alt="Education hub" />
              <img src={educationCards2} alt="Education hub" />
              <img src={educationArticle} alt="Education hub" />
            </div>

          </div>
        </section>

        <Footer />
        </>
    )
}

export default EducationHubPage