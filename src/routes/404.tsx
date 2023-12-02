import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops! </h1>
            <span>Sorry, an unexpected error has occured</span>

            <Link to={'/'}>Back to Home</Link>
        </div>
    );
}

