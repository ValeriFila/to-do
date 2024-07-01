import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import {
    NotFoundPage,
    Calendar
} from '@/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Ууупс, что-то пошло не так...</div>,
        children: [
            {
                index: true,
                element: <Calendar />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },

])
