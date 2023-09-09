import React, { useEffect, useState } from 'react';

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
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`)
        ).json();
        setCharacters(json.data.results);
    }
    console.log(characters)
    useEffect(() => { getMovies() }, []);

    return (
        <>
            {characters.length == 0 ?
                <span>Loading...</span> :
                characters.map(character =>
                    <div key={character.id}>
                        <h4>{character.name}</h4>
                        <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} width='200px' />
                    </div>
                )
            }
        </>
    );
}

