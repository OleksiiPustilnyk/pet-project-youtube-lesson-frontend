import { FC } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { ILineChartProps } from '../../../../common/types/assets'
import moment from 'moment'
import BlockBg from '../../../block-bg/BlockBg'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChart: FC<ILineChartProps> = (props: ILineChartProps) => {
    const { data } = props

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    }

    const values = {
        labels: data[0].price_chart_data.map((element: any) =>
            moment(element[0]).format('DD.MM.YY')
        ),
        datasets: [
            {
                label:
                    data[0].name.charAt(0).toUpperCase() +
                    data[0].name.slice(1),
                data: data[0].price_chart_data.map(
                    (element: any) => element[1]
                ),
                borderColor: 'rgb(241, 196, 15)',
                backgroundColor: 'rgba(241, 196, 15, 0.5)',
            },
        ],
    }

    return (
        <BlockBg>
            <Line options={options} data={values} width="100%" height="20%" />
        </BlockBg>
    )
}

export default LineChart
