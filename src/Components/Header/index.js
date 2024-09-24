import React, { useEffect, useState } from 'react';
import logo from '../../images/GlocareLogo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTab } from '../../reducers/headerReducer';
// import { updateTab } from './counterSlice'

function Header({ background }) {
  const selectedTab = useSelector((state) => state?.header?.selectedTab);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NavOptions = [
    {
      name: 'ABOUT US',
      path: '/about',
      // ref: AboutRef,
    },
    {
      name: 'SERVICES',
      path: '/services',
      // ref: ServicesRef,
    },
    {
      name: 'FACILITIES',
      path: '/facilities',
      // ref: FacilitiesRef,
    },

    {
      name: 'ACCREDITATION',
      path: '/accerditation',
      // ref: AccerditationRef,
    },
    {
      name: 'CONTACT US',
      path: '/contact',
      // ref: ContactRef,
    },
  ];
  return (
    <header
      className="HeaderTab"
      // style={{ background: onScroll ? '#222222b0' : 'none' }}
      style={{ background: background || '#ffffff' }}
    >
      <div style={{ position: 'relative', padding: '20px 50px 10px 20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: '50px',
                background: '#ffffff',
                borderRadius: '25px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p
                onClick={() => {
                  dispatch(updateTab(null));
                  navigate('/');
                  // setSelectedTab(null);
                  // executeScroll(HomeRef);
                }}
                style={{
                  fontSize: '28px',
                  color: '#4b3d7a',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  margin: 0,
                }}
              >
                GLOCARE LABS
              </p>
              <p style={{ margin: 0 }}>
                <span className="caps_sub">C</span>linical{' '}
                <span className="caps_sub">R</span>esearch{' '}
                <span className="caps_sub">O</span>rganisation
              </p>
            </div>
          </div>

          <div className="links">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {NavOptions.map(({ name, path }, id) => (
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                  onClick={() => {
                    dispatch(updateTab(name));
                    navigate(path);
                    // executeScroll(ref);
                  }}
                >
                  <p
                    style={{
                      fontWeight: selectedTab === name ? 1000 : 500,
                      color: '#231f20',
                    }}
                  >
                    {name}
                  </p>
                  {id !== NavOptions.length - 1 && <span>/</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
