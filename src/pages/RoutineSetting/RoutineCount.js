import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RoutineCounter from '../../components/Routine/RoutineCounter'
import { myRoutineCreateMD } from '../../redux/async/routine'
import { resetAction } from '../../redux/modules/updateRoutine'
import '../../styles/routine/count-routine.scss'
import Swal from 'sweetalert2'

const RoutineCount = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 600,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    const dispatch = useDispatch()

    const actionSet = useSelector((state) => state.updateAction.actions)
    const [name, setName] = React.useState('')
    const addRoutine = () => {
        if (name === '') {
            Toast.fire({
                icon: 'error',
                title: '루틴 이름을 입력해주세요.',
            })
            return
        } else {
            const data = {
                routineName: name,
                actions: actionSet,
                isMain: false,
            }
            dispatch(myRoutineCreateMD(data))
            dispatch(resetAction())
        }
    }
    return (
        <>
            <div className="routine-layout">
                <section className="container">
                    <h3 className="count-title">
                        루틴 제목과 동작 횟수를 정해주세요.
                    </h3>
                    <input
                        className="routineIn"
                        placeholder="ex. 회사에서 하는 루틴"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <RoutineCounter />
                    <button className="next-btn" onClick={() => addRoutine()}>
                        완료
                    </button>
                </section>
            </div>
        </>
    )
}

export default RoutineCount
