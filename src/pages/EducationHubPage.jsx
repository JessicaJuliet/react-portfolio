import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import ProjectsSummary from '../components/ProjectsSummary';




const EducationHubPage = () => {
    return (
        <>
        <Navbar />
          <section className='bg-white'>
            <div className='align-element py-16'>
              <SectionTitle text="Education Hub" />
              <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, SCSS, Liquid, Shopify" />
              <div className="grid grid-cols-[60%_minmax(auto,_40%)] gap-16">
                <article>
                  <p className='text-slate-600'>
                   <SectionSubtitle text="Overview" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
                  </p>
                  <p className='text-slate-600'>
                    <SectionSubtitle text="Overview" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
                  </p>
                </article>
                <article>
                    <SectionSubtitle text="Media" />
                    <p className='text-slate-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
                    </p>
                </article>
              </div>
            </div>
          </section>
          <Footer />
        </>
    )
}

export default EducationHubPage