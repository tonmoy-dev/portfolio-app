import type { NextPage } from 'next';

const Navigation : NextPage = () => {
    return (
        <div className='container mx-auto py-6'>
            <div className='flex'>
                <div className='grow-0'>
                    Logo
                </div>
                <nav className='grow'>
                        <ul className='flex space-x-8 justify-end'>
                            <li> <a href="#" className=''>About</a> </li>
                            <li> <a href="#" className=''>Experience</a> </li>
                            <li> <a href="#" className=''>Work</a> </li>
                            <li> <a href="#" className=''>Contact</a> </li>
                            <li> <a href="#" className='px-3 py-2 rounded border'> Resume</a></li>
                        </ul>
                </nav>
            </div>

        </div>
    )
};

export default Navigation;