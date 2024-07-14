import React from 'react';
import Bed from '../../images/BED.jpg';
import Facility_2 from '../../images/facility_2.jpg';
import Facility_3 from '../../images/facility_3.jpg';
import Facility_4 from '../../images/facility_4.jpg';

function Facilities() {
  const data = [
    {
      Title: 'Clinical Division',
      Description:
        'Glocare Labs boasts a state-of-the-art 60-bed facility equipped with advanced safety features, including bed alarms and an ICU for immediate response to medical emergencies. Through collaboration with a nearby multi-specialty hospital, we ensure quick management of any adverse reactions.',
      imageSrc: Bed,
    },
    {
      Title: 'The Clinical Division Encompasses',
      imageSrc: Facility_2,
      Points: [
        'Clinical Processing Unit (CPU) and Diagnostic lab, managed by dedicated quality assurance teams',
        'Extensive on-site facilities for trial participants, including: pharmacy, presentation hall, counselling rooms, physical examination and biological sample collection rooms, dining, and well-equipped recreation areas ',
        'Online Volunteer Information System (OVIS) to check & prevent cross participation of volunteers',
        'Comprehensive CCTV monitoring to ensure security throughout our premises',
      ],
      Description:
        'A robust clinical team including Principal Investigators, Medical Officers, Clinical Research Associates, and support staff to ensure the highest standards of research integrity and safety',
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
  ];
  return (
    <section id="Facilities">
      <div className="SectionHeader">
        <p>Facilities</p>
      </div>

      <div style={{ padding: '0 60px' }}>
        {data.map(({ Title, imageSrc, Points, Description }, id) => (
          <div
            style={{
              display: 'flex',
              justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end',
            }}
          >
            <div className="cardContainer">
              <div>
                <p className="cardTitle">{Title}</p>
                <div className="cardDescription">
                  <p>{Description}</p>
                  <ul className="cardPoints">
                    {Points?.map((it) => (
                      <li>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={imageSrc}
                  alt="facilities img"
                  className="cardImage"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
