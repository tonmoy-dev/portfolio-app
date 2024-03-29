import type { NextPage } from 'next';
import { BsInstagram, BsMedium } from 'react-icons/bs';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const LeftSidebar: NextPage = () => {
    return (
        <div className='relative w-full'>
            <div className='fixed bottom-0'>
                <div className='flex flex-col gap-4 p-10'>
                    <FiGithub className='text-xl' />
                    <BsInstagram className='text-xl' />
                    <FiTwitter className='text-xl' />
                    <FiLinkedin className='text-xl' />
                    <BsMedium className='text-xl' />
                    
                </div>
                {/* <div className='flex items-center justify-center '>
                <p className='rotate-90 h-30'>rxdevs@gmail.com</p>
                </div> */}
                <div className='flex items-center justify-center'>
                    <div className='border-r-2 h-24'></div>
                </div>
                
            </div>
        </div>
    );
};

export default LeftSidebar;