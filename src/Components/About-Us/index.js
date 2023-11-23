import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div  className='all' id='about'>
      <h1 className='team'>About Amali</h1>
      <hr className="section-divides" />
      <div className="about-us-container">
      <div className="image-container">
        <img src="/images/wireframe.png" alt="Company Team" className='frame' />
      </div>
      <div className="text-container">
        <h2 className='headingAbout'>Our Mission</h2>
        <p className='mission'>
          Amali is the essential app for athletes that provides unique space
          to connect collaborate and thrive together.Whether you are a
          beginner or a seasoned pro.Amali offers a vibrant community where
          you can share experiences ,find mentorship and access vital resources
          Join us in revolutionizing athlete support,creating a 
          stronger and more united athletic world.Empower yourself,connect
          wih like-minded individuals and take your athletic journey to a 
          new height with Amali.
         
        </p>
      </div>
    </div>
    </div>
  );
}
export default AboutUs;