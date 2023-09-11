import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'

export default function Header() {
    const theme = useContext<ThemeContextType>(ThemeContext);
    return (
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-amber-400'} w-full p-5  flex justify-center sticky top-0 z-10`}>
            <div className='flex items-center space-x-4'>
                <h2 className={`${theme === 'dark' ? 'text-white' : 'text-zinc-800'} text-2xl`}>Featured</h2>
                <Link to={`/`}>
                    <img
                        className='w-32 sm:w-36 md:w-40 lg:w-48 hover:animate-pulse'
                        src='/favicon/marvel_full.png' />
                </Link>
                <h2 className={`${theme === 'dark' ? 'text-white' : 'text-zinc-800'} text-2xl`}>Characteres</h2>
            </div>
        </div >
    );
}

