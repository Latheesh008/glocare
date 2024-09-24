import React from 'react';
import Bed from '../../images/BED.jpg';
import Facility_2 from '../../images/facility_2.jpg';
import Facility_3 from '../../images/facility_3.jpg';
import Facility_4 from '../../images/facility_4.jpg';
import Header from '../../Components/Header';

function Facilities() {
  const data = [
    {
      Title: 'Clinical Division',
      Description:
        'Glocare Labs boasts a state-of-the-art 60-bed facility equipped with advanced safety features, including bed alarms and an ICU for immediate response to medical emergencies. Through collaboration with a nearby multi-specialty hospital, we ensure quick management of any adverse reactions.',
      imageSrc: Bed,
    },
    {
      Title: 'Bioanalytical Lab',
      imageSrc: Facility_3,
      Points: [
        'LC-MS/MS technology for method development and validation.',
        'Validated methods/processes across major therapeutic areas with short lead times.',
      ],
      Description:
        'Our bioanalytical laboratory is NABL approved (ISO 17025-2017)  and outfitted with advanced instruments and automated equipment for diverse biological sample analysis. With SOPs aligned with Good Laboratory Practices, our team excels in:',
    },
    {
      Title: 'Diagnostic Lab',
      imageSrc: Facility_4,
      Points: [
        'Sample processing, analysis, receipt and coding',
        'Streamlined results review, reports authorization',
        'Secure sample storage and preservation',
      ],
      Description:
        'Our NABL approved and ISO 15189:2012 accredited clinical pathology lab offers specialized laboratory services for clinical and bioequivalence studies, including:',
    },
    {
      Title: 'Our Clinical Division Encompasses',
      imageSrc: Facility_2,
      Points: [
        `State-of-the-art facilities: A dedicated Clinical Processing Unit (CPU) and diagnostic
       laboratory, supported by stringent quality assurance measures. Comprehensive on-site
       amenities for participants, including pharmacy, examination rooms, counseling spaces,
       and recreational areas.`,
        `An Online Volunteer Information System (OVIS) to prevent participant overlap `,
        `Comprehensive CCTV surveillance for enhanced security.`,
        `Expert teams: A skilled clinical team comprising Principal Investigators, Medical
       Officers, Clinical Research Associates, and support staff, committed to research
       integrity and participant safety. `,
      ],
      Description:
        'A robust clinical team including Principal Investigators, Medical Officers, Clinical Research Associates, and support staff to ensure the highest standards of research integrity and safety',
    },
  ];
  return (
    <>
      <Header />

      <section id="Facilities">
        <div style={{ background: '#e6e7e9', padding: '24px' }}>
          <div className="SectionHeader">
            <p style={{margin:'10px'}}>Facilities</p>
          </div>

          <div
            style={{
              // padding: '0 40px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {data.slice(0, 3).map(({ imageSrc }, id) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  background: '#ffffff',
                  width: '30%',
                }}
              >
                <img
                  src={imageSrc}
                  alt="facilities img"
                  className="cardImage"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            padding: '10px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          {data.slice(0, 3).map(({ Title, Description, Points }, id) => (
            <>
              <div style={{ width: '30%' }}>
                <p
                  style={{
                    fontSize: '24px',
                    lineHeight: '32px',
                    fontWeight: 700,
                    color: '#4b3d7a',
                  }}
                >
                  {Title}
                </p>
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '24px',
                  }}
                >
                  {Description}
                </p>

                <ul className="cardPoints">
                  {Points?.map((it) => (
                    <li>{it}</li>
                  ))}
                </ul>
              </div>
              {id != 2 && (
                <div
                  style={{
                    display: 'block',
                    border: '1px dashed black',
                  }}
                />
              )}
            </>
          ))}
        </div>
        <div
          style={{
            background: '#e6e7e9',
            padding: '24px',
          }}
        >
          {' '}
          <p
            style={{
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#4b3d7a',
              textAlign: 'center',
            }}
          >
            {data[3].Title}
          </p>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                background: '#ffffff',
                width: 'fit-content',
              }}
            >
              <img
                src={data[3].imageSrc}
                alt="facilities img"
                className="cardImage_2"
              />
            </div>
            <ul className="cardPoints">
              {data[3].Points?.map((it) => (
                <li>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Facilities;
