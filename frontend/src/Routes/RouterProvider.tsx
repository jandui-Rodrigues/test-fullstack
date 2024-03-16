import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Form from '../Pages/Form'


const router= createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'create',
                element: <Form />
            },
            {
                path: 'edit/:id',
                element: <Form />
            }
        ]
        }
])

export default router;


