

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './port.css'; 
import Skills from './Skills';

const Portfolio = () => {
    useEffect(() => {
        var typed = new Typed(".changing", {
            strings: ["Coder", "Software Developer", "FrontEnd Developer"],
            typeSpeed: 140,
            backSpeed: 140,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section id="border">
                <section className="first">
                    <div className="navbar">
                        <h1>Portfolio</h1>
                        <ul>
                            <li><a href="#h">Home</a></li>
                            <li><a href="#a">About</a></li>
                            <li><a href="#q">Education Details</a></li>
                            <li><a href="#s">Skills</a></li>
                            <i id="new" className="fas fa-bars"></i>
                        </ul>
                    </div>
                    <section className="home" id="h">
                        <div className="content">
                            <h2>Hello!</h2>
                            <h1>Hemalatha Royal</h1>
                            <h2>And I am a <span className="changing">FrontEnd Developer</span></h2>
                            <p>I am a computer science student with a deep passion for technology and problem-solving. My journey began with a
                                fascination for computers and programming languages like Java, C++, HTML, CSS, JavaScript, and MySQL.</p>
 
                        </div>
                        <div className="image" id="newdiv">
                            <img id="newimg" src="profilepic.jpg" alt="profilepic" />
                        </div>
                    </section>
                </section>
                <section className="second" id="a">
                    <div className="image2">
                        <img src="profilepic.jpg" alt="profilepic" />
                    </div>
                    <div className="content2">
                        <h1 id="A">About me</h1>
                        <p>I am a dedicated and passionate web developer with a strong background in HTML, CSS, and JavaScript.
                            With a keen eye for design and commitment to creating engaging and user-friendly websites.
                        </p>
                        <p>Experienced in front-end frameworks like React, I also possess efficient knowledge in back-end development using Node.js and Express.
                        </p>
                        <p>I am motivated to continuously learn and stay up-to-date with the latest industry trends and technologies.</p>
                    </div>
                </section>
                <section className="Qua" id="q">
                    <h1>Education Details</h1>
                    <div className="qualification">
                        <div>
                            <h1 className="heading">School</h1>
                            <h2 className="clgname">Usha kiran High school</h2>
                            <h4>Vempalli</h4>
                            <h4>kadapa</h4>
                        </div>
                        <div>
                            <h1 className="heading">Intermediate</h1>
                            <h2 className="clgname">Akshara junior College</h2>
                            <h4>MPC</h4>
                            <h4>Kurnool</h4>
                        </div>
                        <div>
                            <h1 className="heading">B.Tech</h1>
                            <h2 id="clg" className="clgname">Annamacharya Institute of Technology and Sciences</h2>
                            <h4>Computer Science & Engineering</h4>
                            <h4>Rajampeta</h4>
                        </div>
                    </div>
                </section>
                <section className="forth C" id="s">
                    <h1 id="head">Skills</h1>
                    {<Skills />}
                </section>
            </section>
            
            


            <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex ">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative d-flex"  >
        <iframe
            width="100vh"
            height="100vw"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)", height: '300px', width: '300px' }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />

          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                13/1871,Vempalli
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                raguruhemalatha277@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">6309717159</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
        </div>
        
      
     
    );
};

export default Portfolio;