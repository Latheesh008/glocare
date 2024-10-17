import React from 'react';
import nextImg from '../../images/connection.png';
import intImg from '../../images/int.png';
import publicImg from '../../images/pub.png';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Header from '../../Components/Header';

function About() {
  const data = [
    'Glocare Labs is a leading, full-service Clinical Research Organisation (CRO) committed to advancing clinical trials with precision and integrity.',
    'At Glocare Labs, we are dedicated to ethical research processes and innovation in the life sciences sector. For our partners in the pharmaceutical industry, this  results in unparalleled service, scientific excellence, and a reliable CRO team committed to ensuring the success of each clinical trial.',
    'We are dedicated to setting the benchmark for integrity, operational efficiency, and regulatory compliance in the clinical research industry. Our clinical and bioanalytical facilities are the cornerstone of our operational success.',
    'Our state-of-the-art facilities, rigorously inspected and ISO-certified, exceed industry standards and ensure superior service quality. Operating around the clock, we prioritize our clients timelines, with our clinical and bioanalytical resources poised for efficiency',
  ];

  const cardData = [
    {
      imgsrc: intImg,
      color: '#4b3d7a',
      title: 'Operational Excellence:',
      data: 'Our ISO-certified facilities operate 24/7 to meet demanding timelines without compromising quality. ',
    },
    {
      imgsrc: publicImg,
      color: '#657b99',
      title: 'Scientific Expertise:',
      data: 'Our team of medical professionals brings deep industry knowledge and a passion for innovation. ',
    },
    {
      imgsrc: nextImg,
      color: '#4b3d7a',
      title: 'Unwavering Commitment:',
      data: 'We are dedicated to the success of your clinical trials and building long-term partnerships. ',
    },
  ];

  const CustomCard = ({ imgsrc, title, data, color }) => (
    <div
      style={{
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={imgsrc}
        alt="imgsrc"
        style={{ width: '190px', height: '130px' }}
      />
      <div
        style={{
          background: color,
          color: '#ffffff',
          borderRadius: '8px',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '12px 20px',
          fontSize: '20px',
          height: '110px',
          // width: 'auto'
          marginTop: '5px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 700,
          }}
        >
          {title}
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          {data}
        </p>
      </div>
    </div>
  );
  return (
    <>
      <Header />
      <section className="aboutSection" id="about">
        <div
          style={{
            background: '#e6e7e9',
            padding: '36px',
          }}
        >
          <p
            style={{
              margin: 0,
            }}
            className="SectionHeader"
          >
            ABOUT US
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div className="AboutCardWrapper">
              {data.slice(0, 2).map((it) => (
                <div className="aboutContentWrap">
                  <TaskAltIcon style={{ fontSize: '32px', color: '#4b3d7a' }} />
                  <p className="aboutText">{it}</p>
                </div>
              ))}
            </div>
            <div className="AboutCardWrapper">
              {data.slice(2, 4).map((it) => (
                <div className="aboutContentWrap">
                  <TaskAltIcon style={{ fontSize: '32px', color: '#4b3d7a' }} />
                  <p className="aboutText">{it}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '0 36px',
          }}
        >
          <p
            style={{
              color: '#231f20',
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              fontFamily: 'Segoe UI',
            }}
          >
            What sets us apart:
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {cardData.map((it) => (
              <CustomCard {...it} />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ width: '60%', textAlign: 'center', fontSize: '16px' }}>
              Choose Glocare Labs as your partner in clinical research. Contact
              us today to learn how we can help bring your life-saving therapies
              to market faster.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
