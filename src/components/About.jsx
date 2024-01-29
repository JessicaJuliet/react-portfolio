import SectionTitle from './SectionTitle';
import aboutSvg from "../assets/about.svg"


const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element py-16 grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64'/>
            <article>
                <SectionTitle text="Get to know me" />
                <p className='text-slate-600 mt-8 leading-loose'>
                  I’m a Frontend Developer who’s passionate about creating positive user experiences 
                  through developing visually appealing and responsive user interfaces. I'm experienced in 
                  HTML, CSS, and JavaScript and I thrive on turning innovative ideas into engaging digital 
                  experiences!
                </p>

            </article>
        </div>
    </section>
  )
}

export default About;