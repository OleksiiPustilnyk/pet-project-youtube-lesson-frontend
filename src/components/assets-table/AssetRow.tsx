import { TableCell, TableRow } from '@mui/material'
import { FC } from 'react'
import { ISingleAsset } from '../../common/types/assets'
import { useStyles } from './styles'

interface AssetRowProps {
    asset: ISingleAsset
}

const AssetRow: FC<AssetRowProps> = ({ asset }: AssetRowProps): JSX.Element => {
    const classes = useStyles()
    const isPriceUp = asset.price_change_24h > 0
    const isPriceChangePercentageUp = asset.price_change_percentage_24h > 0

    return (
        <TableRow key={asset.name}>
            <TableCell component="th" scope="row">
                {asset.name}
            </TableCell>
            <TableCell align="right">{`${asset.current_price} $`}</TableCell>
            <TableCell
                align="right"
                className={isPriceUp ? classes.priceUp : classes.priceDown}
            >
                {asset.price_change_24h.toFixed(2)}
            </TableCell>
            <TableCell
                align="right"
                className={
                    isPriceChangePercentageUp
                        ? classes.priceUp
                        : classes.priceDown
                }
            >
                {asset.price_change_percentage_24h.toFixed(2)}
            </TableCell>
        </TableRow>
    )
}

export default AssetRow
