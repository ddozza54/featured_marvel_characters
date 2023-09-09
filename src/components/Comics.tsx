import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Ithumnail {
    path: string;
    extension: string;
}

interface IComics {
    id: number;
    title: string;
    thumbnail: Ithumnail;
}

export default function Comics() {
    const [comics, setComics] = useState<IComics[]>();
    const { id } = useParams();
    const proxy = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`;
    const getComics = async () => {
        const json = await (
            await fetch(`${proxy}`)).json();
        console.log("comics", json.data)
        setComics(json.data.results);
    }
    console.log(comics)
    useEffect(() => {
        getComics();
    }, [])

    return (
        <div>
            {comics?.length !== 0 &&
                comics?.map(comic =>
                    <div key={`${id}11`}>
                        <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} width='300px' />
                        <h2>{comic.title}</h2>
                    </div>)
            }
        </div>
    );
}

