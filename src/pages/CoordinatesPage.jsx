import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import ProjectsSummary from '../components/ProjectsSummary';

// Media imports
import coordinatesVideo from "../assets/coordinatesMedia/coordinatesVideo.mp4";
import coordinatesInput from "../assets/coordinatesMedia/coordinates-form-input.png";
import coordinatesComplete from "../assets/coordinatesMedia/coordinates-form-complete.png";
import coordinatesProduct from "../assets/coordinatesMedia/coordinates-product.png";
import coordinatesUserFeedback from "../assets/coordinatesMedia/coordinates-user-feedback.png";



const Coordinates = () => {
  return (
    <>
    <Navbar />
      <section className='bg-white text-slate-600'>

          <div className='px-5 md:pt-20 md:px-16 border-b-2 border-b-black-900'>
            <div className="grid m-auto md:grid-cols-2 md:max-w-screen-lg md:gap-36">
              <div className='pt-16'>
                <SectionTitle text="Coordinates Template" />
                <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, Vanilla JavaScript, SCSS, Google Geocoding API, Shopify, Liquid, Git" />
              </div>
              <div>
                <img className="w-[31rem] h-[31rem] object-cover object-top" src={coordinatesProduct} />
              </div>
            </div>
          </div>

          <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full md:py-20 bg-slate-50 border-b-2 border-b-black-900">
            <video controls className='md:max-w-screen-lg m-auto'>
              <source className="m-auto" src={coordinatesVideo} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <article className="m-auto md:max-w-2xl leading-loose">
              <SectionSubtitle text="Requirements" />
              <p className='mt-2'>
                To facilitate the business goal of expanding its custom solid gold jewellery offering by developing a new product template to allow users to input DMS coordinates.              
              </p>
            </article>
          </div>

          <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full max-px-16 md:py-20 border-b-2 border-b-black-900">
            <article className="m-auto md:max-w-2xl leading-loose">
              <SectionSubtitle text="Approach" />
              <p className='mt-2'>
                I worked closely with both the UX team and a senior developer, fostering a collaborative environment. Together, we embarked on mapping out the user journey, ensuring a seamless and intuitive experience.
              </p>
              <p className='mt-2'>
                I led the development of the new product template, which involved turning UX designs into code and creating a complex JavaScript input form which required a multitude of feedback responses, such as real-time validation.              
              </p>
            </article>

            <article className='m-auto md:max-w-2xl leading-loose'>
              <SectionSubtitle text="Challenges & Outcome" />
              <p className='mt-2'>
                The main challenge encountered throughout this project was the pressing time constraints. With tight deadlines, it became crucial to prioritise efforts on developing an MVP to meet the immediate needs of the company.
              </p>
              <p className='mt-2'>
                The decision was made to progress with a manual imput form for the first iteration which showcased the essential features. This laid a solid foundation for future iterations planned to include the Google Geocoding API.
              </p>
            </article>

            <div className="m-auto mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:max-w-screen-lg">
              <img src={coordinatesProduct} alt="Coordinates product" />
              <img src={coordinatesInput} alt="Coordinates product" />
              <img src={coordinatesUserFeedback} alt="Coordinates product" />
              <img src={coordinatesComplete} alt="Coordinates pro" />
            </div>

          </div>
      </section>
      <Footer />
    </>
  )
}

export default Coordinates;