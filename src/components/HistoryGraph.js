import React from 'react'
import '../styles/routine/history.scss'
import { BarChart, Bar, XAxis, Legend, Tooltip } from 'recharts'
import { format, addDays, isWithinInterval } from 'date-fns'
import { finRoutinesActionsMD } from '../redux/async/routine'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const HistoryGraph = () => {
    // * get data from server
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(finRoutinesActionsMD())
    }, [])
    const graphActionData = []

    //* setting data from server
    const finActions = useSelector((state) => state.routine.fin.finActions)
    const finRoutines = useSelector((state) => state.routine.fin.finRoutines)
    const joinDate = useSelector((state) => state.routine.fin.joinDate)
    const daylength = moment(joinDate).fromNow().slice(0, 1)
    console.log('&&', finActions, finRoutines)

    const [startDay, setStartDay] = React.useState(0)
    const [week, setWeek] = React.useState(1)

    // * history에 쓰일 날짜들 전부
    const getHistory = () => {
        let history_date = []
        if (daylength % 7 !== 0) {
            for (let i = 0; i < Number(daylength) + (daylength % 7) + 1; i++) {
                history_date.push({
                    date: format(
                        addDays(new Date(joinDate.slice(0, 10)), i),
                        'yyyy-MM-dd'
                    ),
                    actions: [],
                })
            }
        } else {
            for (let i = 0; i < Number(daylength); i++) {
                history_date.push({
                    date: format(
                        addDays(new Date(joinDate.slice(0, 10)), i),
                        'yyyy-MM-dd'
                    ),
                    actions: [],
                })
            }
        }
        return history_date
    }

    // * action 값 넣어주기
    const initialDate = () => {
        let _inital = []
        let history = getHistory()

        history.forEach((data) => {
            const idx = finActions?.findIndex(({ date }) => date === data.date)
            if (idx !== -1) {
                data.actions = finActions[idx]?.actions
            }
        })

        history.map((data) =>
            graphActionData.push({
                name: data.date.slice(5, 10).replace('-', '/'),
                actionCtn: data.actions.length,
            })
        )

        return _inital
    }
    initialDate()

    return (
        <>
            <section className="history-title">
                <button onClick={() => {}}>왼</button>
                <h3>밍기적 {week}주차</h3>
                <button onClick={() => {}}>오</button>
            </section>
            <section>
                <BarChart width={340} height={250} data={graphActionData}>
                    <XAxis dataKey="name" axisLine={false} />
                    <Bar
                        dataKey="actionCtn"
                        radius={[10, 10, 10, 10]}
                        fill="#6B76FF"
                        background="#eee"
                        barSize={20}
                    />
                </BarChart>
            </section>
        </>
    )
}

export default HistoryGraph
