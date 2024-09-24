import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import Accerditation from './Accerditation';
import Facilities from './Facilities';
import About from './Aboutus';
import Contact from './ContactUs';
import Services from './Services';
import logo from '../images/GlocareLogo.png';
import Header from '../Components/Header';

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
      id: 'about',
      ref: AboutRef,
    },
    {
      name: 'SERVICES',
      id: 'service',
      ref: ServicesRef,
    },
    {
      name: 'FACILITIES',
      id: 'facilities',
      ref: FacilitiesRef,
    },

    {
      name: 'ACCREDITATION',
      id: 'accerditation',
      ref: AccerditationRef,
    },
    {
      name: 'CONTACT US',
      id: 'contact',
      ref: ContactRef,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(null);

  const [onScroll, setOnScroll] = useState(false);
  const setHeaderBackground = (currEle) => {
    window.scrollY > 200 ? setOnScroll(true) : setOnScroll(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', setHeaderBackground);
  }, []);
  const executeScroll = (ref) => {
    const yOffset = -90; // Offset to scroll above the tab content
    const y =
      ref?.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // 30% of the tab needs to be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedTab(
            NavOptions.find((it) => it.id === entry.target.id)?.name
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (HomeRef.current) observer.observe(HomeRef.current);
    if (FacilitiesRef.current) observer.observe(FacilitiesRef.current);
    if (ServicesRef.current) observer.observe(ServicesRef.current);
    if (AccerditationRef.current) observer.observe(AccerditationRef.current);
    if (ContactRef.current) observer.observe(ContactRef.current);
    if (AboutRef.current) observer.observe(AboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* <header
        className="HeaderTab"
        // style={{ background: onScroll ? '#222222b0' : 'none' }}
        // style={{ background: '#222222b0'}}
      >
        <div style={{ position: 'relative', margin: '20px 50px 10px 20px' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p
                  onClick={() => {
                    setSelectedTab(null);
                    executeScroll(HomeRef);
                  }}
                  style={{
                    fontSize: '28px',
                    color: '#4b3d7a',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    margin: 0,
                  }}
                >
                  GLOCARE LABS
                </p>
                <p style={{ margin: 0 }}>
                  <span className="caps_sub">C</span>linical{' '}
                  <span className="caps_sub">R</span>esearch{' '}
                  <span className="caps_sub">O</span>rganisation
                </p>
              </div>
            </div>

            <div className="links">
              <ul
                style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
              >
                {NavOptions.map(({ name, ref }) => (
                  <li
                    onClick={() => {
                      setSelectedTab(name);
                      executeScroll(ref);
                    }}
                  >
                    <p
                      style={{
                        fontWeight: selectedTab === name ? 1000 : 500,
                        color: '#231f20',
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
      </header> */}
      <Header />
      {/* <div ref={HomeRef}> */}
      <Home />
      {/* </div> */}
      {/* <div id="about" ref={AboutRef}>
        <About />
      </div>
      <div id="service" ref={ServicesRef}>
        <Services />
      </div>
      <div id="facilities" ref={FacilitiesRef}>
        <Facilities />
      </div>
      <div id="accerditation" ref={AccerditationRef}>
        <Accerditation />
      </div>
      <div id="contact" ref={ContactRef}>
        <Contact />
      </div> */}
    </>
  );
}
