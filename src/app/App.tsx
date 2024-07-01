import './styles/index.scss'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '@/pages/ErrorBoundary/ui/ErrorBoundary.tsx'
import { PageLoader } from '@/widgets/PageLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Sidebar } from '@/widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classNames('App', {}, [theme!])}
        >
            <div className={classNames('content', {}, [])}>
                <div className={classNames('page-wrapper', {}, [])}>
                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
