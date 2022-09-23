import type { NextPage } from 'next';

const About : NextPage = () => {
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-xl mb-4 text-center'>About Me</h2>
            <div className='space-y-4 flex'>
                <div className='w-3/5'>
                    <p>Hello! My name is Tonmoy and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!

                    Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                    Here are a few technologies I&apos;ve been working with recently:
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    </p>
                </div>
                <div className='w-2/5 text-center'>photo</div>
            </div>
        </div>
    )
};

export default About;