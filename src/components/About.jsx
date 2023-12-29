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
                Enthusiastic web developer with a passion for crafting elegant and efficient digital solutions.
                Specialising in frontend technologies, I bring creativity and precision to every project.
                Let's turn ideas into interactive experiences!
                </p>

            </article>
        </div>
    </section>
  )
}

export default About;