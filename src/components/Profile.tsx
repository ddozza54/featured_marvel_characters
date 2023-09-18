import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App';
import { Character } from '../types/types';


export default function Profile({ character }: { character: Character }) {
    const theme = useContext<ThemeContextType>(ThemeContext);
    return (
        <div key={`${character.id}2`}
            className='flex flex-col items-center '>
            <Link to={`/character/${character.id}`} state={character}>
                <img
                    className='w-72 aspect-square rounded-full ring-[6px] ring-red-700  shadow-md 
            hover:ring-amber-400 
            hover:animate-intro
            active:animate-ping
            ' src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} width='200px' />
            </Link >
            <h4
                className={` ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}
mt-6 text-center text-xl`}
            >{character.name}</h4>
            <h4
                className={`
          ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
          mb-5 text-center text-sm`}>
                {character.modified.slice(0, 4)}</h4>
        </div>
    );
}

