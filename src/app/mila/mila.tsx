'use client';
import React from 'react';
// import AboutBackground from '../Assets/about-background.png';
// import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
const MilaAbout: () => React.JSX.Element = () => {
  return (
    <div className="mt-80 relative flex items-center justify-between">
      <div className="absolute left-[-150px] z-[-2]">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="flex-[0.9] mr-4">{/* <img src={AboutBackgroundImage} alt="" /> */}</div>
      <div className="flex-1 flex justify-center flex-col">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Digital Tools Are An Essential Part Of A Balanced Business Strategy
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis
          molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla
          quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default MilaAbout;
