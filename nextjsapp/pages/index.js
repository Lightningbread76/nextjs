import React from 'react';

import { Button } from '../components/Button';
import {Navbar} from '../components/Navbar';

function Home() {
  return (
    <>

    <div className='hero-container'>
      <video id= "background-vid" src='/videos/video-2.mp4' autoPlay loop muted />
      <div className="title-text">
        <h1>Kevin Guo</h1>
      <p>Software Engineer, Web Developer and Student</p>
      </div>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact
        </Button>

    </div>

    </>
  );
}

export default Home;
