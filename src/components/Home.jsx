import React from "react";
import "../css/Home.css";
import { ReactTyped } from "react-typed";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SkillBar from "./SkillBar.jsx";
import  { useState } from 'react';
import { useEffect } from 'react';



import developerImage from "../assets/developer.png";
import developercbImage from "../assets/developercb1.png";
import sjnResume from "../assets/sjnresume.pdf";
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
                    Passionate about building seamless and scalable web applications, 
                    I specialize in creating user-friendly front-end experiences with 
                    React and robust backend systems with Spring Boot. 
                    Leveraging my expertise in Java, JavaScript, and modern full-stack technologies, 
                    I deliver solutions that enhance user satisfaction and drive business success.
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
                 <img src={developerImage} className="img-fluid" alt="Developer" />        
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
            <h4 className="counterup">55</h4>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">13</h4>
            <p>Award Winning</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">2</h4>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <div className="single-counter">
            <h4 className="counterup">857</h4>
            <p>Cup Of Coffees</p>
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
            <img src={developercbImage} className="img-fluid mt-2" alt=""/>
            <div className="">
              <h2 className="text-gradient text-2xl font-bold">Jyothinath Somisetti</h2>
              <p className="designation">Jr.Software Developer</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-content">
            <span className="subtitle">I'm a Developer</span>
            <div className="section-heading">
              <h3 className="heading animated fadeIn">About <span>Me!</span> </h3>
            </div>
            <p class="text-justify font-weight-light">I am a Java Full Stack Developer
               skilled in Java, React, Spring Boot, and MySQL. 
               I build responsive, high-quality web applications, 
               focusing on seamless user experiences and efficient back-end solutions.
                Passionate about coding, I aim to create innovative and reliable software that drives success.</p>

            <SkillBar label="Java" percentage={80} colorClass="color-bg-primary-java" />
            <SkillBar label="React JS" percentage={85} colorClass="color-bg-primary-react" />
            <SkillBar label="SpringBoot" percentage={82} colorClass="color-bg-primary-spring" />
            <SkillBar label="MySQL" percentage={70} colorClass="color-bg-primary-mysql" />
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
      <div className="row " data-aos="fade-right" data-aos-duration="1000">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div>
            <h4 className="maintitle text-center">Education</h4>
          </div>
          <div className="resume-card p-4 d-flex " data-aos="zoom-in" data-aos-duration="1000">
            <div className="resume-icon">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div className="resume">
              <p>2023-2021</p>
              <h5>Master Of Computer Applications</h5>
              <h6>Siddharth Institutions Of Technology</h6>
              <p>Completed Master's degree with strong focus on software development and database management.
                 Gained hands-on experience in Java, React, and Spring Boot through projects and internships.</p>
            </div>
          </div>

          <div className="resume-card p-4 d-flex mt-4 " data-aos="zoom-in" data-aos-duration="1000">
            <div className="resume-icon">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div className="resume">
              <p>2018-2021</p>
              <h5>Batchelor of Science</h5>
              <h6>S V University</h6>
              <p>Completed Bachelor's degree with solid foundation in scientific principles and analytical skills. 
                Participated in projects and coursework that enhanced problem-solving and research abilities.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div>
            <h4 className="maintitle text-center">Experience</h4>
          </div>

          <div className="resume-card p-4 d-flex " data-aos="zoom-in" data-aos-duration="1000">
            <div className="resume-icon">
              <i className="fa-solid fa-desktop h3"></i>
            </div>
            <div className="resume">
              <p>SutiAP/2024-2025</p>
              <h5>Jr.Software Developer</h5>
              <h6>Sutisoft.inc, Hyderabad</h6>
              <p>Primarily worked on UI development using JSP and JSTL, implementing invoice processing and approval workflows. 
                 Additionally contributed to backend development using Spring MVC, integrating business logic and ensuring 
                 seamless interaction between frontend and backend components.</p>
            </div>
          </div>

          <div className="resume-card p-4 d-flex mt-4 " data-aos="zoom-in" data-aos-duration="1000">
            <div className="resume-icon">
              <i className="fa-brands fa-uikit"></i>
            </div>
            <div className="resume">
              <p>SutiAPI/2025-Present</p>
              <h5>Backend Developer</h5>
              <h6>Sutisoft.inc, Hyderabad</h6>
              <p>Developing backend microservices for QuickBooks Online integration
                 within the SutiAPI product. Implementing APIs and services to enable 
                 seamless financial data synchronization and automation for accounting workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blog" id="blog">
    <div className="container">
      <div className="text-center">
        <span className="subtitle">From My Blog</span>
        <div className="section-heading">
          <h3 className="heading animated fadeIn">Blog &amp; <span> Articles</span> </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="blog-post d-flex p-3 align-items-center mt-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
            <div className="blog-img">
              <img className="mr-3 img-fluid" src="assets/images/blog/b01.jpg" alt=""/>
            </div>
            <div className="articles">
              <p className="m-0">10 Mar 2023</p>
              <h6 className="m-0">The Importance Of NLP</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="blog-post d-flex p-3 align-items-center mt-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
            <div className="blog-img">
              <img className="mr-3 img-fluid" src="assets/images/blog/b02.jpg" alt=""/>
            </div>
            <div className="articles">
              <p className="m-0">10 Mar 2023</p>
              <h6 className="m-0">The Importance Of Life</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="blog-post d-flex p-3 align-items-center mt-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
            <div className="blog-img">
              <img className="mr-3 img-fluid" src="assets/images/blog/b03.jpg" alt=""/>
            </div>
            <div className="articles">
              <p className="m-0">10 Mar 2024</p>
              <h6 className="m-0">The Importance Of AI</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="blog-post d-flex p-3 align-items-center mt-4 aos-init" data-aos="fade-up" data-aos-duration="1000">
            <div className="blog-img">
              <img className="mr-3 img-fluid" src="assets/images/blog/b01.jpg" alt=""/>
            </div>
            <div className="articles">
              <p className="m-0">10 Apr 2024</p>
              <h6 className="m-0">The Importance Of Telugu Language</h6>
            </div>
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
                <p className="m-0">Chittoor,Andhra Pradesh</p>
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
                <p className="m-0">somisettijyothinath@gmail.com</p>
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
