import type { NextPage } from 'next';

const Hero : NextPage = () => {
    return (
        <div className='container mx-auto py-6'>
            <div className='space-y-6'>
            <div className='space-y-2'>
                <span className=''>Hi, my name is</span>
                <h2 className='text-5xl font-semibold'>Tonmoy Roy.</h2>
                <h3 className='text-3xl'>I build things for the web.</h3>
            </div>
            <div className='w-1/2'>
                <p className='text-base'>I'm a full stack web developer specializing in building single page web applications. Currently, I'm focused on building more large scale web apps amd learning more in this field.</p>
            </div>
            <button className='px-4 py-2 border rounded'>Check out my resume!</button>
            </div>
        </div>
    )
};

export default Hero;