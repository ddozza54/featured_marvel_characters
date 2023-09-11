import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'

interface IThumbnail {
    path: string;
    extension: string;
}
interface ICharacter {
    id: number;
    name: string;
    thumbnail: IThumbnail;
    modified: string;
}

export default function Home() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const theme = useContext<ThemeContextType>(ThemeContext);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=100&orderBy=modified&series=24229,1058,2023`)
        ).json();
        setCharacters(json.data.results);
    }
    useEffect(() => { getMovies() }, []);
    console.log(characters)

    return (
        <div className='px-10 min-w-max'>
            <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto mt-14'>
                {characters.length == 0 ?
                    <span>Loading...</span> :
                    characters.map(character =>
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
                                className={`
              ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}
               mt-6 text-center text-xl`}
                            >{character.name}</h4>
                            <h4
                                className={`
                              ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}
                              mb-5 text-center text-sm`}>
                                {character.modified.slice(0, 4)}</h4>
                        </div>
                    )
                }
            </div >
        </div >
    );
}

