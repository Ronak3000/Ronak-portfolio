import React from 'react';
import { useNavigate } from 'react-router-dom';

function Project() {
    return (
        <div className='bg-[#0d2438] text-white min-h-screen'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center p-6'>
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center p-6'>
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
                <Projects image={'https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg'} title={'Google Health Platform'} description={'Web Application'} />
            </div>
        </div>
    );
}

export default Project;

function Projects({ image, title, description }) {
    return (
        <div className='bg-[#3f5575] rounded-lg overflow-hidden w-60'>
            <img src={image} alt={title} className='rounded-t-lg h-40 w-full object-cover' />
            <div className='p-4'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <h2 className='text-md'>{description}</h2>
            </div>
        </div>
    );
}
