import React from 'react';
import serviceImg from '../../images/serviceCard.jpg';
import Header from '../../Components/Header';

function Services() {
  const Points = [
    'New drug approval processes',
    'BA/BE study protocol approval',
    'Import licenses/Test licenses',
    "Export BE NOCs ('No Objection Certificate')",
    'Global clinical trial NOCs',
    'Regulatory dossiers',
  ];
  const Points2 = [
    'Single and multiple dose studies',
    'Fasting and fed studies',
    'Food effect studies',
    'PK PD studies',
    'Cross-over and parallel studies',
    'Replicate studies',
    'Proof of concept studies',
    'Special population studies (e.g. postmenopausal and geriatric studies)',
  ];
  const Points3 = [
    'End-to-End PV Solutions: From initial drug safety monitoring to final reporting, we provide comprehensive pharmacovigilance services to ensure the safety and efficacy of pharmaceutical products.',
    'Flexible Safety Monitoring Services: Our adaptable approaches cater to the unique needs of each project, covering all therapeutic areas.',
    'Compliance with Regulations: Staying abreast of the latest regulatory changes, we ensure that all pharmacovigilance activities comply with global and local regulations.',
  ];

  const seconPartPoints = [
    `Glocare Labs is committed to safeguarding patient safety throughout a drug's lifecycle. Our expert pharmacovigilance team delivers end-to-end solutions, from early-phase development to postmarket surveillance.`,
    `We offer tailored safety monitoring services across all
    therapeutic areas, ensuring strict adherence to
    global and local regulatory requirements. Our
    proactive approach identifies potential safety risks
    early, enabling timely decision-making and risk
    mitigation.`,
    `Our dedicated team of pharmacovigilance
    associates and medical monitors offers: `,
  ];

  return (
    <>
      <Header background={'#e6e7e9'} />

      <section className="servicesSection" id="about">
        <div className="SectionHeader">
          <p style={{margin:'10px'}}>SERVICES</p>
        </div>
        <div className="servicesContainer">
          <div className="commonText">
            <p className="headerText">
              Bioavailability and Bioequivalence Studies
            </p>
            <p>
              Glocare excels in conducting a diverse array of clinical studies
              within meticulously controlled environments. Our rigorous
              adherence to SOPs, GCP, and GLP standards ensures seamless
              regulatory compliance.
            </p>
            <p>Studies include:</p>
            <ul className="servicecardPoints">
              {Points2?.map((it) => (
                <li>{it}</li>
              ))}
            </ul>
          </div>
          <div className="servicesCard">
            <img
              src={serviceImg}
              alt="serviceImg"
              style={{ borderRadius: '12px' }}
            />
            <div style={{ padding: '16px' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '28px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  color: '#6b6f92',
                  marginBottom:' 12px'
                }}
              >
                Our team provides comprehensive regulatory support with:
              </p>
              <ul className="servicecardPoints">
                {Points?.map((it) => (
                  <li>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="commonText_2">
          <p className="services_part ">
            Comprehensive Pharmacovigilance Services
          </p>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                width: '50%',
                flexDirection: 'column',
                fontWeight: 500,
                gap: '16px',
              }}
            >
              {seconPartPoints.map((it) => (
                <p style={{ margin: 0 }}>{it}</p>
              ))}
            </div>
            <ul className="servicecardPoints_2">
              {Points3?.map((it) => (
                <li>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
