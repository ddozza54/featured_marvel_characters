import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops! </h1>
            <span>Sorry, an unexpected error ha occured</span>

            <Link to={'/'}>Back to Home</Link>
        </div>
    );
}

