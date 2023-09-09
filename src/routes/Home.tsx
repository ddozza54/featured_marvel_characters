import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IThumbnail {
    path: string;
    extension: string;
}
interface ICharacter {
    id: number;
    name: string;
    thumbnail: IThumbnail;
}

export default function Home() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=100&orderBy=modified&series=24229,1058,2023`)
        ).json();
        setCharacters(json.data.results);
    }
    useEffect(() => { getMovies() }, []);

    return (
        <div className='px-5 min-w-max'>
            <div>
                <h1 className='font-bold text-3xl my-20 text-white'>Featured Characteres</h1>
            </div>
            <div className=' grid grid-cols-3 gap-8 '>
                {characters.length == 0 ?
                    <span>Loading...</span> :
                    characters.map(character =>
                        <div key={`${character.id}2`} className='min-w-max flex flex-col '>
                            <Link to={`/character/${character.id}`} state={character}>
                                <img className='w-64 aspect-square rounded-full ring-8 ring-red-700  shadow-md 
                                hover:ring-amber-400 hover:animate-intro' src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} width='200px' />
                            </Link >
                            <h4 className='text-white my-6 text-center'>{character.name}</h4>
                        </div>
                    )
                }
            </div >
        </div >
    );
}

