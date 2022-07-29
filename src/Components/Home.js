import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiDownArrowCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Projects from "./Projects";
import data from "./Projects-data";

import Testimonial from "./Testimonial";
import TechStack from "./TechStack";
import testData from "./Testimonial-data";
import Contact from "./Contact";
import profpic from "../images/Umapreethi_santhanakrishnan.jpg";

export default function Home() {
  const project = data.map((item) => {
    return (
      <Projects
        subtitle={item.subtitle}
        title={item.title}
        skill={item.skill}
        content={item.content}
        view={item.view}
        live={item.live}
        github={item.github}
        img={item.img}
        bgColor={item.color}
        gitlink={item.gitlink}
      />
    );
  });
  const testimonial = testData.map((item) => {
    return (
      <Testimonial
        title={item.title}
        name={item.name}
        testimonial={item.testimonial}
      />
    );
  });

  return (
    <div className="container-fluid home">
      <div className=" row banner" id="text">
        <div className="col-lg-6 col-md-8 mb-3">
        <h1 className="banner-maintext">
          Hi, <br></br>I'm Uma, <br></br>{" "}
          <spam className="highlight">Front-End Web Developer</spam>
        </h1>
        <div className="social-icons">
          <a href="https://github.com/umapreethi-dev" className="link1">
            <BsGithub className="social-icon" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/umapreethi-santhanakrishnan/"
            className="link1"
          >
            <BsLinkedin className="social-icon" size={30} />
          </a>
          <a href="mailto:umapreethi123.up@gmail.com" className="link1">
            
            <MdEmail className="social-icon" size={30} />
          </a>
        </div>
        <div className="banner-content">
          <p>
            {/* A self-taught Front-End Developer skilled in HTML, CSS, JS, React
            and WordPress. <br></br>I am passionate about design and development of
            website using modern technologies. */}
            I am a Front-End Developer currently open for new opportunities. I am mostly working with React, HTML,CSS,JS and WordPress but I also know Node Js,Express and Databases.
            I work great with team and what makes me unique is that I never give up, I will research,study and will try to solve the problem.
          </p>
        </div>
        <div className="banner-button">
          <a href="#projects" className="explore">
            See My Work
            <BiDownArrowCircle size={30} />
          </a>
          <div className="arrow"></div>
        </div>
        </div>
        <div className="col-lg-6 col-md-4 mb-3">
        <img
            src={profpic}
            alt="pro-pic"
            
            className="img-fluid profile-pic"
          ></img>
        </div>
        
      </div>
      {/* <div className="particle-container">
        <ParticleBackground />
      </div> */}

      <div className="row tech-section gy-5" id="tech">
        <div className="col-lg-6">
          <h2>Technical Skills</h2>
        </div>
        <div className="col-lg-6">
          <TechStack />
        </div>
      </div>
      <div className="row project-section gx-0" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="row">{project}</div>
        <div className="row "><a href="https://github.com/umapreethi-dev" className="project-button">View More Projects <FaLongArrowAltRight size={30} /></a></div>
      </div>
      <div className="row testimonial-section" id="testimonials">
        <h2 className="heading">Testimonials</h2>
        {testimonial}
      </div>
      <div className="row contact-section" id="contact">
        <Contact />
      </div>
    </div>
  );
}
