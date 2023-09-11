import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'
import Comics from '../components/Comics';


interface Ithumnail {
    path: string;
    extension: string;
}

interface IDetail {
    key: string;
    id: string;
    modified: string;
    name: string;
    thumbnail: Ithumnail;
    description: string;
}

export default function Detail() {
    const { id } = useParams();
    const [details, setDetails] = useState<IDetail[]>([]);
    const theme = useContext<ThemeContextType>(ThemeContext);
    const proxy = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
    const getDetails = async () => {
        const json = await (
            await fetch(`${proxy}`)).json();
        setDetails(json.data.results);
    }
    console.log(details)
    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div className='w-full flex flex-col items-center mb-10 '>
            {details.length === 0 ? <span>Loading...</span> :
                details.map(detail =>
                    <div key={detail.id} className='w-full flex bg-amber-500 '>
                        <div className='w-1/2 pl-10'>
                            <h2 className='text-6xl md:text-8xl lg:text-9xl  font-bold text-red-700 my-8'>{detail.name}</h2>
                            <span className={`text-2xl  ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-700'}`}>{detail.description ? detail.description : "No Description"}</span>
                        </div>
                        <div className='w-1/2 '>
                            <img src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`}
                                className='w-full min-w-[200px] max-w-4xl' />
                        </div>
                    </div>)
            }
            <Comics />
        </div>
    );
}

