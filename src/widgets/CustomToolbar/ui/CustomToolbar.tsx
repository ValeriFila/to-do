import React from 'react'
import './CustomToolbar.scss'
import { ToolbarProps } from 'react-big-calendar'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { Button } from '@/shared/ui/Button/Button'

export const CustomToolbar = (toolbar: ToolbarProps) => {
    
    return (
        <div className={classNames('CustomToolbar', {}, [])}>
            <div className='CustomToolbar__navigate'>
                <div className={classNames('CustomToolbar__navigate__label')}>{toolbar.label}</div>
                <div className={classNames('CustomToolbar__navigate__buttons')}>
                    <Button
                        onClick={() => {
                            toolbar.onNavigate('PREV')
                        }}
                    >
                        <GrPrevious
                            size={'3rem'}
                            color={'var(--primary-event-color)'}
                        />
                    </Button>
                    <Button
                        onClick={() => {
                            toolbar.onNavigate('NEXT')
                        }}
                    >
                        <GrNext
                            size={'3rem'}
                            color={'var(--primary-event-color)'}
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}
