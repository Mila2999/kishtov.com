'use client';
// import React from 'react';
// // import AboutBackground from '../Assets/about-background.png';
// // import AboutBackgroundImage from '../Assets/about-background-image.png';
// import { BsFillPlayCircleFill } from 'react-icons/bs';
// const MilaAbout: () => React.JSX.Element = () => {
//   return (
//     <div className="mt-80 relative flex items-center justify-between">
//       <div className="absolute left-[-150px] z-[-2]">
//         {/* <img src={AboutBackground} alt="" /> */}
//       </div>
//       <div className="flex-[0.9] mr-4">{/* <img src={AboutBackgroundImage} alt="" /> */}</div>
//       <div className="flex-1 flex justify-center flex-col">
//         <p className="primary-subheading">About</p>
//         <h1 className="primary-heading">
//           Digital Tools Are An Essential Part Of A Balanced Business Strategy
//         </h1>
//         <p className="primary-text">
//           Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis
//           molestie dui magnis facilisis at fringilla quam.
//         </p>
//         <p className="primary-text">
//           Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla
//           quam.
//         </p>
//         <div className="about-buttons-container">
//           <button className="secondary-button">Learn More</button>
//           <button className="watch-video-button">
//             <BsFillPlayCircleFill /> Watch Video
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MilaAbout;

import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
// import { Button } from '@shadcn/ui'; // Using a shadcn button
import { FC } from 'react';

const MilaHomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Mila's Portfolio</title>
        <meta name="description" content="Welcome to Mila's portfolio website." />
      </Head>
      <div className="bg-gray-100 min-h-screen p-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-4 py-16">
          <Image
            src="/mila.jpg" // Add your image to the public folder
            alt="Mila's Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Mila</h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Front-End Developer specializing in React and TypeScript. Passionate about creating elegant, intuitive interfaces and seamless experiences.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/mila/projects'}>
            Explore My Work
          </Button>
        </section>

        {/* About Me Section */}
        <section className="mt-16 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
          <p className="text-md text-gray-600">
            I’m a passionate front-end developer with two years of experience. I've worked on open-source projects and contributed to building seamless user interfaces. My love for problem-solving and creativity drives me to create engaging and performant websites.
          </p>
        </section>
      </div>
    </>
  );
};

export default MilaHomePage;
