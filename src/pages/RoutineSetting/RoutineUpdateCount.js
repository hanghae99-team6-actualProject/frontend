import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { myRoutineUpdateMD } from '../../redux/async/routine'
import { resetAction } from '../../redux/modules/updateRoutine'

import '../../styles/routine/count-routine.scss'

const RoutineUpdateCount = () => {
    const dispatch = useDispatch()
    const actionSet = useSelector((state) => state.updateAction.actions)
    const myset = useSelector((state) => state.routine.myRoutine)
    const myRoutineId = useSelector((state) => state.routine.updateRoutineRef)
    const myRoutineRef = myset?.filter((set) => set.id === myRoutineId)[0]
        .routineName

    const [name, setName] = React.useState(myRoutineRef)
    console.log(name)

    const updateRoutine = () => {
        const data = {
            routineId: myRoutineId,
            routineName: name,
            actions: actionSet,
            isMain: false,
        }
        console.log(data)
        dispatch(myRoutineUpdateMD(data))
        dispatch(resetAction())
    }
    return (
        <>
            <div style={{ zIndex: '3' }}>
                <Header name="내 루틴 수정하기 ( 2 / 2 )" />
            </div>
            <section className="container">
                <h3 className="count-title">
                    루틴 제목과 액션 횟수를 수정해주세요.
                </h3>
                <input
                    className="routineIn"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <RoutineCounter />
                <button className="next-btn" onClick={() => updateRoutine()}>
                    완료
                </button>
            </section>
        </>
    )
}

export default RoutineUpdateCount
