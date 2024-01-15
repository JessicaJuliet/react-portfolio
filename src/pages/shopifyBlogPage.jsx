import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import ProjectsSummary from '../components/projectsSummary';



const shopifyBlogPage = () => {
  return (
    <>
    <Navbar />
      <section className='bg-white'>
        <div className='align-element py-16'>
          <SectionTitle text="Shopify Blog" />
          <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, JavaScript, SCSS, Liquid, Shopify, Matrixify" />
          <div className="grid md:grid-cols-2 md:gap-16">
            <article>
              <p className='text-slate-600 mt-8 leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
              </p>
              <p className='text-slate-600 mt-8 leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
              </p>
            </article>
            <article>
              <p className='text-slate-600 mt-8 leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil ducimus quos architecto nisi voluptates voluptatibus, placeat libero est similique cupiditate illo rem veniam commodi illum deleniti. Dolor, autem nam!
              </p>
              <p className='text-slate-600 mt-8 leading-loose'>
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

export default shopifyBlogPage