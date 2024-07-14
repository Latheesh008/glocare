import React from 'react';
import serviceImg from '../../images/serviceCard.jpg';

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
    'Compliance with Regulations: Staying abreast of the latest regulatory changes, we ensure that all pharmacovigilance activities comply with global and local regulations.'
]
  return (
    <section className="servicesSection" id="about">
      <div className="SectionHeader">
        <p>Services</p>
      </div>
      <div className="servicesContainer">
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
        <div className="commonText">
          <p className="headerText">
            Bioavailability and Bioequivalence Studies
          </p>
          <p>
            Glocare is equipped to conduct an extensive range of studies in
            strictly controlled clinical environments, adhering to SOPs/GCP/GLP
            standards and efficiently meeting regulatory requirements.
          </p>
          <p>Studies include:</p>
          <ul className="servicecardPoints">
            {Points2?.map((it) => (
              <li>{it}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="commonText_2">
        <p className="headerText alignCenter ">Comprehensive Pharmacovigilance Services</p>
        <p>
        At Glocare Labs, we understand the critical importance of pharmacovigilance throughout the lifecycle of a drug, from clinical development to post-market surveillance. 
        </p>
        <p>Our dedicated team of pharmacovigilance associates and medical monitors offers:</p>
        <ul className="servicecardPoints">
          {Points3?.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
