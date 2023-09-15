import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../App.tsx'
import { BASE_URL } from '../routes/Constants.ts';
import { Comic } from '../types/types.ts';

export default function Comics() {
    const [comics, setComics] = useState<Comic[]>();
    const { id } = useParams();
    const proxy = `${BASE_URL}v1/public/characters/${id}/comics`;
    const theme = useContext<ThemeContextType>(ThemeContext);
    const getComics = async () => {
        const json = await (
            await fetch(`${proxy}`)).json();
        setComics(json.data.results);
    }
    useEffect(() => {
        getComics();
    }, [])

    return (
        <div className='w-full flex flex-col items-center'>
            <h2 className={` ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'} text-2xl mt-16 my-10`} >Comics</h2>
            <div className='grid grid-flow-row gap-5 mx-auto max-w-[80%]
            md:grid-cols-3
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-5
            '>
                {comics?.length !== 0 &&
                    comics?.map(comic =>
                        <div key={`${comic.id}`}
                            className='flex flex-col'>
                            <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                                className='hover:animate-bounce'
                            />
                            <h2 className={`
                             ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}
                            text-lg`}>{comic.title}</h2>
                        </div>)
                }
            </div>
        </div>
    );
}

