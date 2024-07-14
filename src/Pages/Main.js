import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import Accerditation from './Accerditation';
import Facilities from './Facilities';
import About from './Aboutus';
import Contact from './ContactUs';
import Services from './Services';
import logo from '../images/GlocareLogo.png';

export default function Main(props) {
  const HomeRef = useRef(null);
  const FacilitiesRef = useRef(null);
  const ServicesRef = useRef(null);
  const AccerditationRef = useRef(null);
  const ContactRef = useRef(null);
  const AboutRef = useRef(null);

  const NavOptions = [
    {
      name: 'ABOUT US',
      link: '#about',
      ref: AboutRef,
    },
    {
      name: 'SERVICES',
      link: '#service',
      ref: ServicesRef,
    },
    {
      name: 'FACILITIES',
      link: '#facilities',
      ref: FacilitiesRef,
    },

    {
      name: 'ACCREDITATION',
      link: '#accerditation',
      ref: AccerditationRef,
    },
    {
      name: 'CONTACT US',
      link: '#contact',
      ref: ContactRef,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(null);
  const [onScroll, setOnScroll] = useState(false);
  const setHeaderBackground = (currEle) => {
    window.scrollY > 200 ? setOnScroll(true) : setOnScroll(false);
    console.log('currEle',currEle)
  //   if (currEle?.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
  //     $('#menu-center ul li a').removeClass("active");
  //     currLink.addClass("active");
  // }
  // else{
  //     currLink.removeClass('active');
  // } 
  };
  useEffect(() => {
    window.addEventListener('scroll', setHeaderBackground);
  }, []);
  const executeScroll = (ref) => {
    ref?.current?.scrollIntoView();
  };

  return (
    <>
      <header
        className="HeaderTab"
        style={{ background: onScroll ? '#222222b0' : 'none' }}
      >
        <div style={{ position: 'relative', margin: '0 100px 0 20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: '50px', background: '#ffffff' }}
              />
              <p
                onClick={() => {
                  setSelectedTab(null);
                  executeScroll(HomeRef);
                }}
                style={{
                  fontSize: '28px',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                GLOCARE LABS
              </p>
            </div>

            <div className="links">
              <ul
                style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
              >
                {NavOptions.map(({ name, link, ref }) => (
                  <li
                    onClick={() => {
                      setSelectedTab(name);
                      executeScroll(ref);
                    }}
                  >
                    <p
                      style={{
                        color: selectedTab === name ? '#00ff91' : '#ffffff',
                      }}
                    >
                      {name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div ref={HomeRef}>
        <Home />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
      <div ref={ServicesRef}>
        <Services />
      </div>
      <div ref={FacilitiesRef}>
        <Facilities />
      </div>
      <div ref={AccerditationRef}>
        <Accerditation />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
    </>
  );
}
