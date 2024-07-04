import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './PageLoader.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    
    return (
        <div className={classNames('loader', {}, [className!])}>
            <div className='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
