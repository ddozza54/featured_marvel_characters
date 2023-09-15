import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/404";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/character/:id',
                element: <Detail />
            }
        ],
    },
]);

export default router;  
