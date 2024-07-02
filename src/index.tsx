import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { store } from '@/app/providers/store/store'
import { router } from '@/app/providers/router/router.tsx'
import '@/shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
