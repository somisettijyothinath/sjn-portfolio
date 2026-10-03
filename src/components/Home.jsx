import React from "react";
import "../css/Home.css";
import { ReactTyped } from "react-typed";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SkillCard from "./SkillCard.jsx";
import  { useState } from 'react';
import { useEffect } from 'react';



import developerImage from "../assets/developer.png";
import sjnPortfolioImage from "../assets/SJN-Portfolio-Image.jpeg";
import sjnAiPhoto from "../assets/SJN_AI_PHOTO.jpeg";
import sjnResume from "../assets/Somisetti_Jyothinath_Experience.pdf";
import ravanImg from '../assets/ravan.jpg';
import mcaImg from '../assets/mca.jpg';
import royalImg from '../assets/royal.jpeg';
import tinksdjImg from '../assets/tinkusdj.jpg';
import sjnImg from '../assets/sjn.jpg';
import developerImg1 from '../assets/developer1.jpg';
import teamImg from '../assets/teamofsutiap.jpg';
import ContactForm from "./ContactForm";




function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
  developerImage,
  developerImg1,
  sjnImg,
  teamImg,
  ravanImg,
  mcaImg,
  royalImg,
  tinksdjImg
  ];
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const nextSlide = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  
useEffect(() => {
  if (!isHovered) {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // 5 seconds
    return () => clearInterval(timer);
  }
}, [isHovered, images.length]);




 

  return (
    <div className="body">
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 order-2 order-lg-1">
              <div className="introduction">
                <span className="subtitle">Hello, I'm</span>
                <h1 className="title">
                 <span>Jyothi Nath </span><span className="surname">SomiSetti</span>
                  <br />
                  <span className="element">A </span>&nbsp;
                  {/* <span className="typed-cursor" aria-hidden="true">
                        React SpringBoot Java Full Stack |
                  </span> */}
                  <ReactTyped
                    strings={[
                      "<span class='react'>Developer</span>",
                      "<span class='spring'>Farmer</span>",
                      "<span class='java'>Writer</span>"
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>
                  <p>
                    Results-driven Java Full Stack Developer with 2+ years of hands-on
                    experience building enterprise-grade web applications and ERP
                    integrations at SutiSoft Inc. I specialize in Java 21/25, Spring Boot
                    microservices, React TypeScript, and PostgreSQL — migrating legacy
                    monolithic applications to modern microservices and integrating
                    platforms like QuickBooks Online, Sage Intacct, and NetSuite via
                    secure OAuth2-based APIs.
                  </p>
                {/* Social icon */}
                 <div className="social-icon">
                  <ul className="social-list m-0 p-0">
                    <li>
                      <a href="https://www.facebook.com/jyothi.nath.520/" target="_blank" rel="noreferrer">
                        <FaFacebookF className="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/so_me_jyothinath/?utm_source=qr#" target="_blank" rel="noreferrer">
                        <FaInstagram className="instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/somisetti-jyothinath-051b52258/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@myworldmyindia" target="_blank" rel="noreferrer">
                        <FaYoutube className="youtube" />
                      </a>
                    </li>
                     <li>
                      <a href="mailto:somisettijyothinath482001@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail className="gmail" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 order-1 order-lg-2">
              <div className="hero">
                 <img src={sjnPortfolioImage} className="img-fluid" alt="Jyothi Nath SomiSetti" />        
              </div>
          </div>
          </div>
        </div>
      </section>

    <section className="wrapper py-4 text-center">
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">2+</h4>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">6+</h4>
            <p>SutiSoft Products</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">3</h4>
            <p>ERP Integrations</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">90%+</h4>
            <p>Code Coverage</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="about-us" id="about">
    <div className="container">
      <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="developercb aos-init">
            <img src={sjnAiPhoto} className="img-fluid mt-2" alt="Jyothinath Somisetti"/>
            <div className="about-name-tag">
              <h2 className="text-gradient text-2xl font-bold">Jyothinath Somisetti</h2>
              <p className="designation">Java Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-content">
            <span className="subtitle">I'm a Developer</span>
            <div className="section-heading">
              <h3 className="heading animated fadeIn">About <span>Me!</span> </h3>
            </div>
            <p class="text-justify font-weight-light">I am a Java Full Stack Developer with
               2+ years of professional experience at SutiSoft Inc, building enterprise-grade
               web applications and ERP integrations. My expertise spans Java 21/25, Spring Boot
               microservices, React TypeScript, and PostgreSQL. I design secure, scalable backend
               services with JWT and OAuth2, and I'm experienced in migrating monolithic
               applications to modern microservices architecture in Agile/Scrum environments.</p>

            <div className="skill-cards-grid">
              <SkillCard icon="fa-brands fa-java" label="Java 21 / 25" percentage={90} color="#f89820" />
              <SkillCard icon="fa-solid fa-leaf" label="Spring Boot & Microservices" percentage={88} color="#6DB33F" />
              <SkillCard icon="fa-brands fa-react" label="React TypeScript" percentage={85} color="#61DBFB" />
              <SkillCard icon="fa-solid fa-database" label="PostgreSQL / SQL" percentage={82} color="#00B4D8" />
              <SkillCard icon="fa-solid fa-shield-halved" label="JWT & OAuth2 Security" percentage={85} color="#ffb400" />
              <SkillCard icon="fa-solid fa-code-branch" label="Git & GitLab / CI" percentage={83} color="#e24329" />
            </div>
            <div className="mt-5">
              <a href={sjnResume} download className="btn btn-primary">
                <span>Download CV</span>
              </a>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="my-resume" id="myresume">
    <div className="container">
      <div className="text-center">
        <span className="subtitle">Check Out Of My Resume</span>
        <div className="section-heading">
          <h3 className="heading animated fadeIn">My <span>Resume</span> </h3>
        </div>
      </div>
      <div className="row resume-row" data-aos="fade-up" data-aos-duration="1000">
        {/* ===== Experience ===== */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <h4 className="maintitle text-center">
            <i className="fa-solid fa-briefcase me-2"></i>Experience
          </h4>
          <div className="timeline">

            <div className="timeline-item" data-aos="fade-left" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-code"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">Jan 2026 - Present</span>
                <h5>Java Backend Developer</h5>
                <h6>SutiERP &amp; SutiBooks · SutiSoft Inc, Hyderabad</h6>
                <p>Building SutiERP, a central integration hub unifying 6+ SutiSoft products,
                   and cloud accounting modules for SutiBooks. Designing independently deployable
                   microservices with JWT &amp; OAuth2 security and RESTful APIs for real-time
                   financial data synchronization.</p>
                <div className="tech-tags">
                  <span>Java 21/25</span><span>Spring Boot</span><span>Microservices</span>
                  <span>React TS</span><span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-plug"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">Dec 2024 - Dec 2025</span>
                <h5>Junior Software Developer</h5>
                <h6>SutiAP &amp; SutiAPI · SutiSoft Inc, Hyderabad</h6>
                <p>Architected microservices-based integrations for QuickBooks Online, Sage Intacct,
                   and NetSuite using OAuth2 via SutiAPI, enabling bi-directional financial data sync.
                   Owned end-to-end feature development with responsive React TypeScript UI and
                   optimized API performance.</p>
                <div className="tech-tags">
                  <span>OAuth2</span><span>SutiAPI</span><span>QuickBooks</span>
                  <span>Sage Intacct</span><span>NetSuite</span>
                </div>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-laptop-code"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">May 2024 - Nov 2024</span>
                <h5>Software Developer Trainee</h5>
                <h6>SutiAP · SutiSoft Inc, Hyderabad</h6>
                <p>Contributed to SutiAP, a monolithic Spring MVC + JSP application for Accounts
                   Payable automation. Developed JSP views and Spring MVC controllers, wrote optimized
                   SQL/PL-SQL queries and procedures, and performed JUnit testing and code reviews.</p>
                <div className="tech-tags">
                  <span>Spring MVC</span><span>JSP</span><span>Hibernate</span>
                  <span>Oracle/MySQL</span><span>JUnit</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===== Education ===== */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <h4 className="maintitle text-center">
            <i className="fa-solid fa-graduation-cap me-2"></i>Education
          </h4>
          <div className="timeline">

            <div className="timeline-item" data-aos="fade-right" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-user-graduate"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">2021 - 2023 <b className="score-badge">87.5%</b></span>
                <h5>Master of Computer Applications (MCA)</h5>
                <h6>Siddharth Institute of Engineering &amp; Technology, Puttur</h6>
                <p>Specialized in software development, database management, and full-stack
                   technologies including Java, Spring Boot, and React.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-user-graduate"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">2018 - 2021 <b className="score-badge">81%</b></span>
                <h5>Bachelor of Science (B.Sc. Computers)</h5>
                <h6>Himaja Degree College, Puttur</h6>
                <p>Built a solid foundation in computer science fundamentals, programming,
                   and analytical problem-solving.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-school"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">2016 - 2018 <b className="score-badge">86.5%</b></span>
                <h5>Intermediate (MPC)</h5>
                <h6>Himaja Junior College, Puttur</h6>
                <p>Studied Mathematics, Physics, and Chemistry, developing strong logical
                   and analytical thinking skills.</p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-right" data-aos-duration="800">
              <span className="timeline-dot"><i className="fa-solid fa-book"></i></span>
              <div className="timeline-card">
                <span className="timeline-date">2016 <b className="score-badge">83%</b></span>
                <h5>SSC (10th Grade)</h5>
                <h6>Z.P. High School, T.K.M. Peta</h6>
                <p>Completed secondary education with distinction, laying the groundwork
                   for a career in technology.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== Key Achievements ===== */}
      <div className="achievements" data-aos="fade-up" data-aos-duration="1000">
        <h4 className="maintitle text-center">
          <i className="fa-solid fa-trophy me-2"></i>Key Achievements
        </h4>
        <div className="row g-4 mt-1">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="achievement-card">
              <i className="fa-solid fa-arrows-turn-to-dots"></i>
              <p>Migrated SutiAP from a legacy monolith to a modern microservices architecture with a React TypeScript frontend.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="achievement-card">
              <i className="fa-solid fa-handshake"></i>
              <p>Integrated 3 major ERP platforms — QuickBooks Online, Sage Intacct &amp; NetSuite — via OAuth2 SutiAPI.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="achievement-card">
              <i className="fa-solid fa-vial-circle-check"></i>
              <p>Achieved 90%+ code coverage through Test-Driven Development using JUnit and Mockito.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="achievement-card">
              <i className="fa-solid fa-layer-group"></i>
              <p>Currently developing SutiERP — a central platform unifying 6+ SutiSoft products.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href={sjnResume} download className="btn btn-primary resume-download-btn">
          <i className="fa-solid fa-download me-2"></i><span>Download Resume</span>
        </a>
      </div>
    </div>
  </section>

  <section className="blog" id="blog">
    <div className="container">
      <div className="text-center">
        <span className="subtitle">My Writing Journey</span>
        <div className="section-heading">
          <h3 className="heading animated fadeIn">Writing &amp; <span>Literature</span> </h3>
        </div>
      </div>

      {/* Featured Novel */}
      <div className="featured-book" data-aos="fade-up" data-aos-duration="1000">
        <div className="featured-book-cover">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <div className="featured-book-info">
          <span className="featured-tag">Featured Novel · నవల</span>
          <h4>Amma Cheppina Kathalu</h4>
          <p className="telugu-title">అమ్మ చెప్పిన కథలు</p>
          <p className="featured-desc">
            A heartfelt collection of stories inspired by the tales my mother told me —
            woven with the warmth of Telugu culture, village life, and timeless moral
            values passed down through generations. An ongoing work close to my heart.
          </p>
          <div className="featured-meta">
            <span><i className="fa-solid fa-feather-pointed"></i> Written by Jyothinath Somisetti</span>
            <span><i className="fa-solid fa-pen-nib"></i> Ongoing</span>
          </div>
        </div>
      </div>

      {/* Other writings */}
      <div className="row g-4 mt-2">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="writing-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="writing-icon"><i className="fa-solid fa-feather"></i></div>
            <span className="writing-type">Short Stories</span>
            <h6>Kathalu — Telugu Short Stories</h6>
            <p>A series of original Telugu short stories exploring human emotions,
               relationships, and everyday life.</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="writing-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="writing-icon"><i className="fa-solid fa-heart"></i></div>
            <span className="writing-type">Poetry</span>
            <h6>Reflections &amp; Emotions</h6>
            <p>Poems and verses capturing feelings, nature, and the beauty of
               the Telugu language and its expressions.</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="writing-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="writing-icon"><i className="fa-solid fa-language"></i></div>
            <span className="writing-type">Articles</span>
            <h6>On Culture &amp; Technology</h6>
            <p>Articles bridging my two worlds — the richness of Telugu culture
               and the evolving world of technology.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="my-gallery" id="mygallery">
    <div className="container">
      <div className="text-center">
        <span className="subtitle">Check Out Of My Gallery</span>
        <div className="section-heading">
          <h3 className="heading animated fadeIn">My <span>Gallery</span> </h3>
        </div>
      </div>
      <div className="card gallery-card">
  <button onClick={prevSlide} className="arrow left">&#9664;</button>
<img
  src={images[index]}
  alt="Gallery"
  className="gallery-image"
  style={{cursor: 'pointer'}}
  onMouseEnter={() => setIsHovered(true)} // pause on hover
  onMouseLeave={() => setIsHovered(false)} // resume on leave
  onClick={() => setShowModal(true)}
/>

  <button onClick={nextSlide} className="arrow right">&#9654;</button>
</div>
{showModal && (
  <div className="modal-backdrop" onClick={() => setShowModal(false)}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <img src={images[index]} alt="Full"
           style={{maxWidth: '90vw', maxHeight: '90vh'}}
           onMouseEnter={() => setIsHovered(true)} // pause on hover
           onMouseLeave={() => setIsHovered(false)} // resume on leave
       />
      <button onClick={() => setShowModal(false)} style={{
        position: 'absolute', top: -32, fontSize: 24, color: '#fff', background: 'rgba(255, 255, 255, 0.6)', border:'none', borderRadius:'50%', width:40, height:40, cursor:'pointer'
      }}>×</button>
    </div>
  </div>
)}
    </div>
  </section>

  <section className="contact" id="contact">
    <div className="container">
      <div className="text-center mb-5 mb_5">
        <span className="subtitle">Contact Me</span>
        <div className="section-heading">
          <h3 className="heading animated fadeIn">Get In <span> Touch</span> </h3>
        </div>
        <div className="contact-text aos-init aos-animate" data-aos="fade-right">
          <p>Please fill out the form on this section to contact with me. Or call between 6:00 a.m. and 10:00 p.m. IST,
            Monday through Saturday</p>
        </div>
      </div>
      <div className="row aos-init" data-aos="fade-up" data-aos-duration="1000">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="info">
            <div className="info-item d-flex my-4">
              <p><i className="fa-solid fa-location-dot "></i></p>
              <div className="info-text">
                <h6>Address</h6>
                <p className="m-0">Hyderabad, India</p>
              </div>
            </div>
            <div className="info-item d-flex my-4">
              <p><i className="fa-solid fa-phone"></i></p>
              <div className="info-text">
                <h6>Phone</h6>
                <p className="m-0">+91 630 502 3551</p>
              </div>
            </div>
            <div className="info-item d-flex my-4">
              <p><i className="fa-regular fa-envelope"></i></p>
              <div className="info-text">
                <h6>Email</h6>
                <p className="m-0">somisettijyothinath482001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="contact-form">
        <ContactForm/>

      </div>
        </div>
       <div className="map-area">
          <div className="map" style={{ width: '100%', height: '320px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.512742286061!2d79.4053897!3d13.4096355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d549e7d3e7397%3A0xc59c3a35715e1413!2sZ.P.HIGH%20SCHOOL%2C%20T.K.M.peta!5e0!3m2!1sen!2sin!4v1693513200000!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Z.P.HIGH SCHOOL Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
}

export default Home;
