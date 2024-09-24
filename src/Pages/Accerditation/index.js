import React from 'react';
import Cert_1 from '../../images/CERTIFICATE.jpg';
import Cert_2 from '../../images/CERTIFICATE-2.jpg';
import Cert_3 from '../../images/CERTIFICATE-3.jpg';
import CDSCO from '../../images/CDSCO.jpg';
import CHILE from '../../images/CHILE.jpg';
import NABL from '../../images/NABL.jpg';
import Header from '../../Components/Header';

const imagesSet1 = [Cert_1, Cert_2, Cert_3];
const imagesSet2 = [CDSCO, CHILE, NABL];

function Accerditation() {
  const Points = [
    'ISP CHILE: Our clinical studies have been audited and approved by ISP CHILE. This highlights our capability to meet stringent international standards.',
    'DCGI & NABL Approval: As a CRO specialized in BA/BE Studies, we are proud to have the approval of the Drugs Controller General of India (DCGI) and the National Accreditation Board for Testing and Calibration Laboratories (NABL), underscoring our commitment to quality and safety.',
    'European Union (EMA) approval pending (submission completed)',
  ];
  return (
    <>
      <Header background={'#e6e7e9'} />

      <section className="AccerditationSection" id="Accerditation">
        <div className="SectionHeader">
          <p>ACCREDITATION & APPROVALS</p>
        </div>
        <div style={{ padding: '0 60px', display: 'flex', justifyContent:'space-between' }}>
          <div style={{width:'45%'}}>
            <p className="headerText">International Standards and Approvals:</p>
            <ul className="servicecardPoints">
              {Points?.map((it) => (
                <li>{it}</li>
              ))}
            </ul>
          </div>
          <div className="AccerditationCardContainer">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div className="imgWrapper">
                {imagesSet1.map((src) => (
                  <img src={src} alt="noImg" className="AccerditationImages" />
                ))}
              </div>
              <div className="imgWrapper">
                {imagesSet2.map((src) => (
                  <img src={src} alt="noImg" className="AccerditationImages" />
                ))}
              </div>
            </div>
            <li
              style={{
                fontSize: '20px',
                color: '#ffffff',
                fontWeight: 700,
                textAlign: 'justify',
                lineHeight: '26px',
                background: '#657b99',
                padding: '20px 40px',
                borderRadius: '16px',
              }}
            >
              ISO 9001:2015, ISO 14001:2015, ISO 27000:2015: These
              accreditations affirm our dedication to quality management systems
              (QMS), environmental management systems (EMS), and information
              security management systems (ISMS), reflecting our holistic
              approach to operational excellence.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accerditation;
