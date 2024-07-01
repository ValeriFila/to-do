import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '../../../shared/lib/classNames/classNames'
import './AppLink.scss'

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children: React.ReactNode
    testId?: string
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        to,
        testId
    } = props

    return (
        <Link
            to={to}
            data-testid={testId}
            className={classNames('AppLink', {}, [className!, theme])}
        >
            { children }
        </Link>
    )
}
