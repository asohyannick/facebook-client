import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from '../App';
import { 
    Home,
    About,
    Project,
    SignIn,
    SignUp,
    Story,
    Testimonials,
    Marketing,
    Clients,
    Consult,
    Design,
    Development,
    Contact,
    Training,
    Login
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
            element:<Login/>,
        },
        {
            path:'/signUp',
            element:<SignUp/>,
        },
        {
            path:'/story',
            element:<Story/>,
        },
        {
            path:'/testimonials',
            element:<Testimonials/>,
        },
        {
            path:'/market',
            element:<Marketing/>,
        },
        {
            path:'/clients',
            element:<Clients/>,
        },
        {
            path:'/consult',
            element:<Consult/>,
        },
        {
            path:'/design',
            element:<Design/>,
        },
        {
            path:'/development',
            element:<Development/>,
        },
        {
            path:'/contact',
            element:<Contact/>,
        },
        {
            path:'/train',
            element:<Training/>,
        },
    ]);
    return <RouterProvider router={router}/>
}

export default Router;