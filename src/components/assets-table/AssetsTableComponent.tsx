import {
    TableContainer,
    Table,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material'
import { FC } from 'react'
import { ISingleAsset, ITablePriceData } from '../../common/types/assets'
import AssetRow from './AssetRow'

const AssetsTableComponent: FC<ITablePriceData> = ({
    assets,
}: ITablePriceData): JSX.Element => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Asset name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Changes ($)</TableCell>
                        <TableCell align="right">Changes (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((asset: ISingleAsset) => (
                        <AssetRow key={asset.name} asset={asset} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AssetsTableComponent
