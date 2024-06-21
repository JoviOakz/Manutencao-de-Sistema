import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts';
import data from "../constants/graphics.json"

export function GraphicPage() {

    return (
        <>
            <div>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div>
                <BarChart width={600} height={300} data={data}>
                    <Bar dataKey="y" fill="#8884d8" />
                </BarChart>
            </div>
        </>
    )
}   