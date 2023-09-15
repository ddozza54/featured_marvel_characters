import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'
import { BASE_URL, NO_IMAGE_URL } from './Constants.ts';
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
    const [searchText, setSearchText] = useState('');
    const theme = useContext<ThemeContextType>(ThemeContext);

    const getCharacters = async () => {
        const json = await (
            await fetch(`${BASE_URL}v1/public/characters?limit=100&orderBy=modified&series=24229,1058,2023`)
        ).json();
        setCharacters(json.data.results.filter((v: ICharacter) => v.thumbnail.path !== NO_IMAGE_URL));
    }
    useEffect(() => { getCharacters() }, []);

    return (
        <div className='px-10 min-w-max'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    onChange={(e) => {
                        const text = e.target.value.toLowerCase();
                        setSearchText(text);
                    }}
                    type='text' placeholder='Whom do you looking for'
                    className='p-2 border-2 border-red-500 outline-none fixed top-10 z-10' />
            </form>
            <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mx-auto mt-14'>
                {characters.length == 0 ?
                    <span>Loading...</span> :
                    characters.filter(c => {
                        if (searchText === "") {
                            return c;
                        }
                        if (searchText) {
                            return c.name.toLowerCase().includes(searchText);
                        }
                    }).map(character =>
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
                    )
                }
            </div >
        </div >
    );
}

