import { FC } from 'react'
import { ITablePriceData } from '../../../common/types/assets'
import AssetsTableComponent from '../../assets-table/AssetsTableComponent'

const TopPriceComponent: FC<ITablePriceData> = (
    props: ITablePriceData
): JSX.Element => {
    const { assets } = props

    return <AssetsTableComponent assets={assets} />
}
export default TopPriceComponent
