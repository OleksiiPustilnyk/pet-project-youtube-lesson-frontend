import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ScriptableContext,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import { IAreaChartProps } from '../../../../common/types/assets'
import { FC } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

const AreaChart: FC<IAreaChartProps> = (props: IAreaChartProps) => {
    const { data } = props

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    const values = {
        labels: data.map((element: number[]) =>
            moment(element[0]).format('DD.MM.YYYY')
        ),
        datasets: [
            {
                fill: 'start',
                label: 'Price',
                data: data.map((element: number[]) => element[1]),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
                    gradient.addColorStop(0, '#32dbbe')
                    gradient.addColorStop(1, '#008dff')
                    return gradient
                },
            },
        ],
    }
    return <Line options={options} data={values} width={300} />
}

export default AreaChart
