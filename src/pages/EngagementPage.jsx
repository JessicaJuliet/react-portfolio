import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
// import ProjectsSummary from "../components/projectsSummary";

// Media imports
import engagementPage from "../assets/engagementMedia/engagement-page.png";
import engagementDesktop from "../assets/engagementMedia/engagement-collection-desk.png";
import engagementFourCs from "../assets/engagementMedia/engagement-four-cs.png";
import engagementReading from "../assets/engagementMedia/engagement-reading.png";
import engagementServices from "../assets/engagementMedia/engagement-services.png";
import engagementCollection from "../assets/engagementMedia/engagement-collection.png";
import engagementVideo from "../assets/engagementMedia/engagement-video.mp4";


const EngagementPage = () => {
  return (
    <>
    <Navbar />
    <section className='bg-white text-slate-600'>
      <div className='px-5 md:pt-20 md:px-16 border-b-2 border-b-black-900'>
        <div className="grid m-auto md:grid-cols-2 md:max-w-screen-lg md:gap-36">
          <div className='pt-12'>
            <SectionTitle text="Engagement Page" />
            {/* <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, Vanilla JavaScript, SCSS" /> */}
          </div>
          <div>
            <img src={engagementPage} className="w-[31rem] h-[31rem] object-cover object-top" />
          </div>
        </div>
      </div>

      <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full md:py-20 bg-slate-50 border-b-2 border-b-black-900">
        <img src={engagementDesktop} alt='Shopify blog page' className='m-auto md:max-w-screen-lg'/>
        <article className="m-auto md:max-w-2xl leading-loose">
          <SectionSubtitle text="The Problem" />
          <p className='mt-2'>
            The Customer Experience {"("}CX{")"}  team’s feedback highlighted that customers were struggling to source all necessary product and service information when purchasing high-value engagement rings online. This was potentially delaying, or hindering, the sales process for some. 
          </p>
        </article>
      </div>

      <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full max-px-16 md:py-20 border-b-2 border-b-black-900">
        <article className="m-auto md:max-w-2xl leading-loose">
          <SectionSubtitle text="The Solution" />
          <p className='mt-2'>
            Collaborating closely with CX and UX teams, I developed an engagement page to enhance the customer shopping experience for engagement products by consolidating essential information in one place.
          </p>
          <p className='mt-2'>
            Users can easily navigate through relevant product collections, explore service options, access educational content, and explore various payment options. Futhermore, the page showcases product imagery to capture the user's attention and offer a visually appealing browsing experience. 
          </p>
        </article>

        <div className="m-auto mt-5 md:max-w-screen-lg">
          <video controls>
            <source src={engagementVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>

        <article className="m-auto md:max-w-2xl leading-loose">
          <SectionSubtitle text="Challenges" />
          <p className='mt-2'>
            The primary challenge encountered in this project revolved around effectively presenting a wealth of content on a single page without overwhelming the user or leading to cognitive overload.
          </p>
          <p className='mt-2'>
            This was overcome through the use of tabs, so visitors could easily navigate between different sections,and grid layouts which ensured that information was presented in a visually appealing and organised way.
          </p>
          <p className="mt-2">
            By leveraging these design elements, we successfully mitigated the risk of information overload, creating an engaging user experience that facilitated seamless exploration of the engagement hub's offerings.
          </p>
        </article>

        <div className="m-auto mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:max-w-screen-lg">
          <img src={engagementCollection} alt="Engagement rings page" />
          <img src={engagementFourCs} alt="Engagement rings page" />
          <img src={engagementReading} alt="Engagement rings page" />
          <img src={engagementServices} alt="Engagement rings page" />
        </div>

      </div>
    </section>

    <Footer />
    </>
  )
}

export default EngagementPage