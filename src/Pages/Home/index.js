import React, { useEffect, useState } from 'react';

function Home() {
  const content = ['Ethical', 'Efficient', 'Compliance'];

  return (
    <section id="Home">
      <div className="HomeContainer">
        <p className="titleHeader">
          A <span className="highlightColor">C</span>linical{' '}
          <span className="highlightColor">R</span>esearch{' '}
          <span className="highlightColor">O</span>rganisation
        </p>
        <p className="subTitle">Your Partner in Clinical Research Excellence</p>

        <div
          style={{
            margin: '60px 40px',
          }}
        >
          {content.map((it) => (
            <div className="TransperantBackground">
              <p
                style={{
                  fontSize: '28px',
                  lineHeight: '45px',
                  paddingLeft: '20px',
                  fontWeight: 700,
                }}
              >
                {it}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
