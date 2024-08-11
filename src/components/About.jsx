import React from 'react';
import profileImage from '../assets/profile.png'; 

function About() {
    return (
        <div className='bg-[#0d2438] min-h-screen flex flex-col items-center pt-20'>
            <img className="h-48 rounded mb-8" alt="Profile" src={profileImage} />
            <p className="text-gray-200 text-center max-w-4xl px-4 mt-4 text-2xl">
                Hello! I'm Ronak Sharma, an intermediate software developer with a passion for problem-solving and technology. I work with modern technologies such as React, Node.js, and Tailwind CSS to build dynamic and responsive web applications. Additionally, I have good knowledge of Python and machine learning, which I use to explore and develop data-driven solutions. In my free time, I enjoy playing chess, reading books, and participating in competitive programming on Codeforces. Let's connect and explore opportunities to collaborate on exciting projects!
            </p>
        </div>
    );
}

export default About;
