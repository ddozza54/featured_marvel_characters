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
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-white text-2xl mt-16 my-10'>Comics</h2>
            <div className='grid grid-flow-row gap-5 mx-auto max-w-[80%]
            md:grid-cols-3
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-5
            '>
                {comics?.length !== 0 &&
                    comics?.map(comic =>
                        <div key={`${id}11`}
                            className='flex flex-col'>
                            <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                                className='hover:animate-bounce'
                            />
                            <h2 className='text-zinc-300 text-lg'>{comic.title}</h2>
                        </div>)
                }
            </div>
        </div>
    );
}

