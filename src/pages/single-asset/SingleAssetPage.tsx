import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { ISingleAsset } from '../../common/types/assets'
import { Grid, AlertColor } from '@mui/material'
import { useStyles } from './styles'
import { createWatchListRecord } from '../../store/thunks/assets'
import AssetInfo from '../../components/SingleAssetPage/asset-info/AssetInfo'
import ControlButtons from '../../components/UI/control-button/ControlButtons'
import Notification from '../../components/SingleAssetPage/notification/Notification'

const SingleAssetPage: FC = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [severity, setSeverity] = useState<AlertColor>('success')
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )
    const classes = useStyles()

    const asset = assetsArray.find((element) => element.name === (id as string))

    const handleCreateRecord = () => {
        try {
            const data = {
                name: asset?.name || '',
                assetId: asset?.id || '',
            }
            dispatch(createWatchListRecord(data))
            setError(false)
            setSeverity('success')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
        } catch (error) {
            setError(true)
            setSeverity('error')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000)
        }
    }

    return (
        <>
            {asset && (
                <Grid container className={classes.root}>
                    <AssetInfo asset={asset} />
                    <ControlButtons handleCreateRecord={handleCreateRecord} />
                    <Notification
                        open={open}
                        severity={severity}
                        error={error}
                        onClose={() => setOpen(false)}
                    />
                </Grid>
            )}
        </>
    )
}

export default SingleAssetPage
