import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
// import ProjectsSummary from "../components/projectsSummary";

// Media imports
import blogPage from "../assets/blogMedia/blogPage.png";
import blogEngagement from "../assets/blogMedia/blog-engagement.png";
import blogMenu from "../assets/blogMedia/blog-menu.png";
import blogEducation from "../assets/blogMedia/blog-education.png";
import blogArticle from "../assets/blogMedia/blog-article.png";
import blogContent from "../assets/blogMedia/blog-content.png";



const shopifyBlogPage = () => {
  return (
    <>
    <Navbar />
      <section className='bg-white text-slate-600'>

        <div className='px-5 md:pt-20 md:px-16 border-b-2 border-b-black-900'>
          <div className="grid m-auto md:grid-cols-2 md:max-w-screen-lg md:gap-36">
            <div className='pt-12'>
              <SectionTitle text="Shopify Blog" />
              {/* <ProjectsSummary industry="Luxury Jewellery" date="2023" tech="HTML, CSS, Vanilla JavaScript, SCSS, Shopify, Liquid, Matrixify app, Git" /> */}
            </div>
            <div>
              <img className="w-[31rem] h-[31rem] object-cover object-top" src={blogEngagement} />
            </div>
          </div>
        </div>

        <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full md:py-20 bg-slate-50 border-b-2 border-b-black-900">
          <img src={blogPage} alt='Shopify blog page' className='shadow-md m-auto md:max-w-screen-lg'/>
          <article className="m-auto md:max-w-2xl leading-loose">
            <SectionSubtitle text="Requirements" />
            <p className='mt-2'>
              To develop a blog on Shopify, migrating the old WordPress blog, in order to consolidate all content under one platform to streamline management processes for the tech team.
            </p>
          </article>
        </div>

        <div className="px-5 py-10 grid grid-cols-1 gap-5 md:gap-10 max-w-full max-px-16 md:py-20 border-b-2 border-b-black-900">
          <article className="m-auto md:max-w-2xl leading-loose">
            <SectionSubtitle text="Approach" />
            <p className='mt-2'>
              Prior to commencing any development work I consulted with the Marketing team as the migration would directly impact their processes. I outlined the pros and cons of migrating the blog and the reasons why tech were considering this.
            </p>
            <p className='mt-2'>
              Following the relevant stakeholder buyin, I approached the WordPress blog review methodically and commenced the development work. I developed a fully responsive choronological blog on Shopify which allows users to filter by post category.
            </p>
          </article>

          <article className="m-auto md:max-w-2xl leading-loose">
            <SectionSubtitle text="Challenges & Outcome" />
            <p className='mt-2'>
              A key component of this project was reviewing a considerable amount of older blog posts, images and metadata on WordPress to ensure their relevancy before exporting and migrating them to Shopify. The marketing team did not have the capcity to take on this project and as a result it was delayed.
            </p>
            <p className='mt-2'>
              I took the initiative to carry out this review as it was in our interest to complete this ahead of a major rebrand launch in 2023. My familiarity with WordPress, SEO and marketing aided me in this process and subsequently in the successful launch of the new Shopify blog.
            </p>
          </article>

          <div className="m-auto mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:max-w-screen-lg">
            <img src={blogMenu} alt="Blog menu" />
            <img src={blogEducation} alt="Blog education page" />
            <img src={blogArticle} alt="Blog article" />
            <img src={blogContent} alt="Blog content" />
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default shopifyBlogPage