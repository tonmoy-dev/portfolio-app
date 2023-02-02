import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import DarkModeToggle from "react-dark-mode-toggle";

const Navigation: NextPage = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='mx-auto py-4 shadow-md sticky top-0 bg-white dark:bg-slate-900'>
            <div className='flex items-center container mx-auto'>
                <div className='grow-0 mx-4'>
                    Logo
                </div>
                <nav className='grow'>
                    <ul className='flex space-x-8 justify-end'>
                        <li> <a href="#aboutMe" className=''>About</a> </li>
                        <li> <a href="#" className=''>Experience</a> </li>
                        <li> <a href="#projects" className=''>Projects</a> </li>
                        <li> <a href="#" className=''>Contact</a> </li>
                        <li> <a href="#" className='px-3 py-2 rounded border'> Resume</a></li>
                    </ul>
                </nav>
                <div className='mx-4'>
                <DarkModeToggle
                    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    checked={theme === 'dark' ? true : false}
                    size={70}
                />
                </div>
            </div>

        </div>
    )
};

export default Navigation;