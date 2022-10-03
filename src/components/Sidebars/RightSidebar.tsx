import type { NextPage } from 'next';
// import { BsInstagram, BsMedium } from 'react-icons/bs';
// import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const RightSidebar: NextPage = () => {
    return (
        <div className='relative w-full flex items-center justify-center'>
            <div className='fixed bottom-0'>
                {/* <div className='flex flex-col gap-4 p-10'>
                    <FiGithub className='text-xl' />
                    <BsInstagram className='text-xl' />
                    <FiTwitter className='text-xl' />
                    <FiLinkedin className='text-xl' />
                    <BsMedium className='text-xl' />
                    
                </div> */}
                <div className='h-36'>
                    <p className='rotate-90'>
                        <span className='text-slate-500 hover:text-white text-base'>tonmoyroydev@gmail.com
                        </span>
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='border-r-2 h-24'></div>
                </div>
                
            </div>
        </div>
    );
};

export default RightSidebar;