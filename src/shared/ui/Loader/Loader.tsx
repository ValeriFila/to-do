import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    
    return (
        <div className={classNames('Loader', {}, [className!])}> 
            
        </div>
    )
}
