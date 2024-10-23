import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
//import JokeTypesContainer from './containers/JokeTypesContainer';
import JokeByTypeContainer2 from './containers/JokeByTypeContainer2';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <HomeContainer />
            },
            {
                path: "types",
                element: <JokeByTypeContainer2 />
            }
        ]
    }
])
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router ={router} />
    </React.StrictMode>
)