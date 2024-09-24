import React from 'react';
import locationImg from '../../images/location.png';
import Header from '../../Components/Header';

function Contact() {
  const address = [
    'Address:',
    'GLOCARE LABS',
    'No. 2A, 4th Street, Ganga Nagar,',
    'Kodambakkam, Chennai - 600 024, India',
  ];

  return (
    <>
      <Header />
      <section className="contactSection" id="about">
        <div className="SectionHeader" style={{ padding: '20px' }}>
          <p style={{ margin: 0 }}>CONTACT US</p>
        </div>
        <div className="contactDetails">
          <p className="contactText">
            Let's collaborate to advance your clinical research goals. We
            welcome inquiries about our services and potential partnerships.
          </p>
          <div className="contactWholeWrapper">
            <div>
              <div className="contactText_2">
                {address.map((it, id) => (
                  <p className={id === 0 ? 'contactTitle' : 'noMargin'}>{it}</p>
                ))}
              </div>
              <div className="contactText_3">
                <p className="contactTitle">Mobile & WhatsApp:</p>
                <p style={{ color: 'red' }}> +91 94447 03791</p>
              </div>

              <div className="contactText_3">
                <p className="contactTitle">Email:</p>
                <p>
                  For general and medical inquiries:{' '}
                  <span
                    style={{ color: '#0300ff', textDecoration: 'underline' }}
                  >
                    md@glocarelabscro.com
                  </span>{' '}
                </p>
                <p>
                  For marketing and partnership inquiries:
                  <span
                    style={{ color: '#0300ff', textDecoration: 'underline' }}
                  >
                    marketing@glocarelabscro.com
                  </span>
                </p>
              </div>
            </div>
            <div className="mapWrapper">
              <img
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  background: '#ffffff',
                }}
                onClick={() =>
                  window.open('https://maps.app.goo.gl/TsRnJgsnRXgkRagq5')
                }
                src={locationImg}
                alt="loaction"
                width={700}
                height={'auto'}
              />
              <p className="contactTitle">Google Maps</p>
              <p className="mapText">
                Easily locate our CRO by searching for “Glocare Labs" on Google
                Maps, or click here to view our location and plan your visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
