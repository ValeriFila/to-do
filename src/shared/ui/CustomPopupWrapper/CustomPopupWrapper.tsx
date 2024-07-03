import { MouseEvent, ReactNode, RefObject } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Portal } from '@/shared/ui/Portal/ui/Portal.tsx'
import './CustomPopupWrapper.scss'

interface CustomPopupWrapper {
    onClose: () => void
    children: ReactNode
    innerElementRef: RefObject<HTMLDivElement>
}

export const CustomPopupWrapper = (props: CustomPopupWrapper) => {
    const {
        onClose,
        children,
        innerElementRef
    }= props

    const handleClose = (e: MouseEvent) => {
        if (innerElementRef.current && !innerElementRef.current.contains(e.target as HTMLDivElement)) {
            onClose()
        }
    }

    return (
        <Portal>
            <div
                className={classNames('CustomPopupWrapper')}
                onClick={handleClose}
            >
                {children}
            </div>
        </Portal>
    )
}
