import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';
import { 
    Sidebar,
    Home,
    About,
    Project,
    SignIn,
    SignUp,
 } from '../components';

import {
    Error
} from '../pages';

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<App/>,
            errorElement:<Error/>
        },
        {
            path:'/sidebar',
            element:<Sidebar/>,
        },
        {
            path:'/home',
            element:<Home/>,
        },
        {
            path:'/about',
            element:<About/>,
        },
        {
            path:'/project',
            element:<Project/>,
        },
        {
            path:'/signIn',
            element:<SignIn/>,
        },
        {
            path:'/signUp',
            element:<SignUp/>,
        }
    ]);
    return <RouterProvider router={router}/>
}

export default Router;