import type { NextPage } from 'next';
// import images from '../../data/images'

const About : NextPage = () => {
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-2xl mb-5 text-center'>About Me</h2>
            <div className='space-y-4 flex gap-6'>
                <div className='w-3/5'>
                    <p className='text-base'>Hello! My name is Tonmoy and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!

                    Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                    Here are a few technologies I&apos;ve been working with recently:
                    </p>
					<ul>
						<li>JavaScript (ES6+)</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Node.js</li>
					</ul>
                </div>
                <div className='w-2/5 text-center p-5'>
                    <img className='w-full' src="https://i.ibb.co/j3mNFfk/dev.png" alt="" />
                </div>
            </div>
        </div>
    )
};

export default About;