import { useStyles } from './style'
import { ReactNode } from 'react'

interface BlockBgProps {
    children: ReactNode
}

const BlockBg: React.FC<BlockBgProps> = ({ children }) => {
    const classes = useStyles()
    return <div className={classes.block}>{children}</div>
}

export default BlockBg
