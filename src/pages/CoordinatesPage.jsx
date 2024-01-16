import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import ProjectsSummary from '../components/projectsSummary';

// Media imports (img/mp4)
import coordinatesVideo from "../assets/coordinatesMedia/coordinatesVideo.mp4";
import coordinatesFeedback from "../assets/coordinatesMedia/coordinatesFeedback.png";
import coordinatesInput from "../assets/coordinatesMedia/coordinatesInput.png";
import coordinatesComplete from "../assets/coordinatesMedia/coordinatesComplete.png";



const Coordinates = () => {
  return (
    <>
    <Navbar />
      <section className='bg-white'>
        <div className='align-element py-16'>
          <SectionTitle text="Coordinates Template" />
          <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, Vanilla JavaScript, SCSS, Google Geocoding API, Shopify, Liquid, Git" />

          <div className="grid md:grid-cols-2 md:gap-16 text-slate-600">
            <article>
              <SectionSubtitle text="Requirements" />
              <p className='mt-2'>
                To facilitate the business goal of expanding its custom solid gold jewellery offering by developing a new product template to allow users to input DMS coordinates.              
              </p>
              <SectionSubtitle text="Approach" />
              <p className='mt-2'>
                I worked closely with both the UX team and a senior developer, fostering a collaborative environment. Together, we embarked on mapping out the user journey, ensuring a seamless and intuitive experience.
              </p>
              <p className='mt-2'>
                I led the development of the new product template, which involved turning UX designs into code and creating a complex JavaScript input form which required a multitude of feedback responses, such as real-time validation.              
              </p>
            </article>

            <article>
              <SectionSubtitle text="Challenges & Outcome" />
              <p className='mt-2'>
                The main challenge encountered throughout this project was the pressing time constraints. With tight deadlines, it became crucial to prioritise efforts on developing an MVP to meet the immediate needs of the company.
              </p>
              <p className='mt-2'>
                The decision was made to progress with a manual imput form for the first iteration which showcased the essential features. This laid a solid foundation for future iterations planned to include the Google Geocoding API.
              </p>
            </article>
          </div>

          <SectionSubtitle text="Images" />
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            <img src={coordinatesFeedback} alt='Coordinates Project' className='shadow-md'/>
            <img src={coordinatesInput} alt='Coordinates Input' className='shadow-md'/>
            <img src={coordinatesComplete} alt='Coordinates Complete' className='shadow-md'/>
          </div>

          <SectionSubtitle text="Demo video" />
          <video controls className='py-10 md:max-w-screen-md'>
            <source src={coordinatesVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Coordinates