import { useEffect, useState } from 'react';
import { BASE_URL, NO_IMAGE_URL } from './Constants.ts';
import { Character } from '../types/types.ts';
import Profile from '../components/Profile.tsx';

export default function Home() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState('');

    const getCharacters = async () => {
        const json = await (
            await fetch(`${BASE_URL}v1/public/characters?limit=100&orderBy=modified&series=24229,1058,2023`)
        ).json();
        setCharacters(json.data.results.filter((v: Character) => v.thumbnail.path !== NO_IMAGE_URL));
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
                    characters.filter(c => 
                        searchText? c.name.toLowerCase().includes(searchText) : c
                    ).map((character, index) =>
                        <Profile
                            character={character}
                            key={index}
                        />
                    )
                }
            </div >
        </div >
    );
}

