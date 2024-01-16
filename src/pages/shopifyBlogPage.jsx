import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import ProjectsSummary from '../components/projectsSummary';


// Media imports (img/mp4)
import blogPage from "../assets/blogMedia/blogPage.png";



const shopifyBlogPage = () => {
  return (
    <>
    <Navbar />
      <section className='bg-white'>
        <div className='align-element py-16'>
          <SectionTitle text="Shopify Blog" />
          <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, Vanilla JavaScript, SCSS, Shopify, Liquid, Matrixify app, Git" />

          <div className="grid md:grid-cols-2 md:gap-16 text-slate-600">
            <article>
              <SectionSubtitle text="Requirements" />
              <p className='mt-2'>
                To develop a blog on Shopify, migrating the old WordPress blog, in order to consolidate all content under one platform to streamline management processes for the tech team.
              </p>
              <SectionSubtitle text="Approach" />
              <p className='mt-2'>
                Prior to commencing any development work I consulted with the Marketing team as the migration would directly impact their processes. I outlined the pros and cons of migrating the blog and the reasons why tech were considering this.
              </p>
              <p className='mt-2'>
                Following the relevant stakeholder buyin, I approached the WordPress blog review methodically and commenced the development work. I developed a fully responsive choronological blog on Shopify which allows users to filter by post category.
              </p>
            </article>

            <article>
              <SectionSubtitle text="Challenges & Outcome" />
              <p className='mt-2'>
                A key component of this project was reviewing a considerable amount of older blog posts, images and metadata on WordPress to ensure their relevancy before exporting and migrating them to Shopify. The marketing team did not have the capcity to take on this project and as a result it was delayed.
              </p>
              <p className='mt-2'>
                I took the initiative to carry out this review as it was in our interest to complete this ahead of a major rebrand launch in 2023. My familiarity with WordPress, SEO and marketing aided me in this process and subsequently in the successful launch of the new Shopify blog.
              </p>
            </article>
          </div>

          <SectionSubtitle text="Images" />
          <div className="grid gap-10 grid-cols-1 py-10">
            <img src={blogPage} alt='Shopify blog page' className='shadow-md max-w-3xl'/>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default shopifyBlogPage