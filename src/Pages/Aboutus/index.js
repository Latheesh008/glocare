import React from 'react';
import nextImg from '../../images/nextIcon.png';
import intImg from '../../images/international.png';
import publicImg from '../../images/public.png';

function About() {
  const data = [
    'Glocare Labs is a leading, full-service Clinical Research Organisation (CRO) committed to advancing clinical trials with precision and integrity.',
    'At Glocare Labs, we are dedicated to ethical research processes and innovation in the life sciences sector. For our partners in the pharmaceutical industry, this  results in unparalleled service, scientific excellence, and a reliable CRO team committed to ensuring the success of each clinical trial.',
    'At Glocare Labs, we are dedicated to setting the benchmark for integrity, operational efficiency, and regulatory compliance in the clinical research industry. Our clinical and bioanalytical facilities are the cornerstone of our operational success.',
    'At Glocare Labs, our state-of-the-art facilities, rigorously inspected and ISO-certified, exceed industry standards and ensure superior service quality. Operating around the clock, we prioritize our clients timelines, with our clinical and bioanalytical resources poised for efficiency',
  ];

  const cardData = [
    {
      imgsrc: intImg,
      data: 'We uphold the highest global standards, seamlessly incorporating Good Clinical Practice (GCP) and Good Laboratory Practice (GLP) into our operations to define industry excellence.',
    },
    {
      onlyText: true,
      data: "Embark on your next clinical research journey with a partner who brings ethical practices, operational excellence, and unwavering compliance to every project. At Glocare Labs, we don't just conduct studies, we set global standards.",
    },
    {
      imgsrc: publicImg,
      data: 'Our team is our greatest asset, with highly specialized medical professionals combining extensive knowledge and expertise with a strong commitment to process innovation and optimization.',
    },

  ];
  return (
    <section className="aboutSection" id="about">
      <div className="SectionHeader">
        <p>About Us</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <div className="AboutCardWrapper">
          {data.slice(0, 2).map((it) => (
            <div className="AboutCard">
              <div style={{ display: 'flex', gap: '12px' }}>
                <img className="iconWrapper" src={nextImg} alt="nextImg" />
                <p
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '26px',
                    color: '#6b6f92',
                  }}
                >
                  {it}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="AboutCardWrapper">
          {data.slice(2, 4).map((it) => (
            <div className="AboutCard">
              <div style={{ display: 'flex', gap: '12px' }}>
                <img className="iconWrapper" src={nextImg} alt="nextImg" />
                <p
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '26px',
                    color: '#6b6f92',
                  }}
                >
                  {it}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '60px',
          justifyContent: 'space-between',
        }}
      >
        {cardData.map(({ imgsrc, data, onlyText }) =>
          onlyText ? (
            <p style={{
              display:'flex',
              width:'300px',
              textAlign:'center',
              alignItems:'center',
              fontSize:'18px',
              fontWeight:600
            }}>{data}</p>
          ) : (
            <div className="leftCard">
              <img
                src={imgsrc}
                alt="imgsrc"
                style={{ width: '100px', height: '100px' }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '26px',
                }}
              >
                {data}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default About;
