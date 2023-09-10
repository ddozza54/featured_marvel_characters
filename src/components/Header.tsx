import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div className='w-full p-5 bg-black flex justify-center sticky top-0 z-10'>
            <div className='flex items-center space-x-4'>
                <h2 className='text-white text-2xl'>Featured</h2>
                <Link to={`/`}>
                    <img
                        className='w-32 sm:w-36 md:w-40 lg:w-48 hover:animate-pulse'
                        src='/favicon/marvel_full.png' />
                </Link>
                <h2 className='text-white text-2xl'>Characteres</h2>
            </div>
        </div >
    );
}

