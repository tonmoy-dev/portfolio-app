import type { NextPage } from 'next';
import { useTheme } from 'next-themes'

const Navigation: NextPage = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='mx-auto py-5 shadow-lg sticky top-0'>
            <div className='flex container mx-auto'>
                <div className='grow-0'>
                    Logo
                </div>
                <div>
                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        toggle
                    </button>
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