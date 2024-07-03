import React, { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import { setNotes } from '@/features/model/notesSlice.ts'
import { useAppDispatch } from '@/shared/lib/hooks'
import { PageLoader } from '@/widgets/PageLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'

export const App = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('notes')) {
            dispatch(setNotes({ ...JSON.parse(localStorage.getItem('notes')!) }))
        }

    }, [])

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
