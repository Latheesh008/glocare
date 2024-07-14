import React from 'react';
import locationImg from '../../images/location.png';

function Contact() {
  const address = [
    'Address:',
    'GLOCARE LABS',
    'No. 2A, 4th Street, Ganga Nagar,',
    'Kodambakkam, Chennai - 600 024, India',
  ];

  return (
    <section className="contactSection" id="about">
      <div className="ContactHeaderWrapper">
        <p className="ContactHeader">Contact</p>
      </div>
      <div className="contactDetails">
        <p className="contactText">
          We welcome inquiries, collaboration opportunities, and discussions on
          how we can support your clinical research needs. Here's how you can
          reach us:
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
              <p> +91 94447 03791</p>
            </div>

            <div className="contactText_3">
              <p className="contactTitle">Email:</p>
              <p>
                For general and medical inquiries:{' '}
                <span style={{ color: '#0300ff' }}>md@glocarelabscro.com</span>{' '}
              </p>
              <p>
                For marketing and partnership inquiries:
                <span style={{ color: '#0300ff' }}>
                  {' '}
                  marketing@glocarelabscro.com
                </span>
              </p>
            </div>
          </div>
          <div className="mapWrapper">
            <p className="contactTitle">Google Maps</p>
            <p className="mapText">
              Easily locate our CRO by searching for “Glocare Labs" on Google
              Maps, or click here to view our location and plan your visit.
            </p>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() =>
                window.open('https://maps.app.goo.gl/TsRnJgsnRXgkRagq5')
              }
              src={locationImg}
              alt="loaction"
              width={500}
              height={'auto'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
