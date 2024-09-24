import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTab } from '../../reducers/headerReducer';
import { useDispatch } from 'react-redux';

function Home() {
  const content = ['Ethical', 'Efficient', 'Compliance'];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section id="Home">
      <div className="HomeContainer">
        <p className="titleHeader">
          Your Partner in Clinical Research Excellence
        </p>

        <div
          style={{
            margin: '60px 40px',
            display: 'flex',
          }}
        >
          {content.map((it, id) => (
            <div className="TransperantBackground">
              <p
                style={{
                  fontSize: '32px',
                  lineHeight: '45px',
                  fontWeight: 700,
                }}
              >
                {it}
              </p>
              {id !== content?.length - 1 && <hr className="separator" />}
            </div>
          ))}
        </div>
        <Button
          style={{
            color: 'black',
            background: '#ffffff',
            padding: '8px 24px',
          }}
          onClick={() => {
            navigate('/about');
            dispatch(updateTab('ABOUT US'));
          }}
        >
          About us
        </Button>
      </div>
    </section>
  );
}

export default Home;
