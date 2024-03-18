import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import FormPage from '../Pages/Form.page'


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
                element: <FormPage />
            },
            {
                path: 'edit/:id',
                element: <FormPage />
            }
        ]
        }
])

export default router;


