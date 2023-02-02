import Typewriter from 'typewriter-effect';
import type { NextPage } from 'next';

const Hero: NextPage = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='space-y-10 text-center'>
                <div className='space-y-4'>
                    <div>
                        <span className='text-xl'>Hi, my name is</span>
                        <span className='text-6xl font-semibold'>Tonmoy Roy</span>
                    </div>
                    <p className='text-3xl'>I build things for the web.</p>
                    <p className='text-2xl'>
                        <Typewriter
                                
                            options={{
                                strings: [ 'A JavaScript Developer','A Frontend Developer', 'A MERN Stack Developer',],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>


                </div>
                <div className='w-1/2 mx-auto'>
                    <p className='text-base'>I&apos;m a full stack web developer specializing in building single page web applications. Currently, I&apos;m focused on building more large scale web apps amd learning more in this field.</p>
                </div>
                <button className='px-4 py-2 border rounded bg-slate-900 dark:bg-white text-white dark:text-black '>Check out my resume!</button>
            </div>
        </div>
    );
};

export default Hero;