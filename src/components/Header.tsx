import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='w-full h-100 p-5 bg-black flex items-center '>
            <Link to={`/`} >
                <img
                    className='w-28'
                    src='/favicon/marvel_full.png' />
            </Link>
            <h1>DDOZZA</h1>
        </div >
    );
}

