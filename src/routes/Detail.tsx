import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const proxy = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
    const getDetails = async () => {
        const json = await (
            await fetch(`${proxy}`)).json();
        setDetails(json.data.results);
    }
    console.log(details)
    // useEffect(() => {
    //     getDetails();
    // }, [])

    return (
        <div>
            {details.length !== 0 &&
                details.map(detail =>
                    <div key={id}>
                        <img src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`} width='300px' />
                        <h2 >{detail.name}</h2>
                        {detail.description ? <span>detail.description</span> : <span>No Description</span>}
                    </div>)
            }
            <Comics />
        </div>
    );
}

