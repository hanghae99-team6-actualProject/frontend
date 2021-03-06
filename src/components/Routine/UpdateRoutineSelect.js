import React from 'react'
import Check from '../../elements/Check'
import { FlexColumn, FlexRow, Text } from '../../elements/index'

const RoutineSelect = (props) => {
    const { stretching, body_exercise, select } = props
    const [desc, setDesc] = React.useState('first')

    React.useEffect(() => {
        if (select === 'first') {
            setDesc('stretching')
        } else if (select === 'second') {
            setDesc('body_exercise')
        } else {
            setDesc('stretching')
        }
    })

    return (
        <>
            {desc === 'stretching' && (
                <FlexColumn _border="none" _width="85vw">
                    {stretching.map((routine, idx) => (
                        <FlexRow
                            _width="85vw"
                            _height="60px"
                            _border="none"
                            _justify="space-between"
                            _others="border-bottom:1px solid lightgray"
                            key={idx}
                        >
                            <Text _fontSize="11px" _margin="10px 0">
                                {routine}
                            </Text>
                            <Check value={routine} />
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
            {desc === 'body_exercise' && (
                <FlexColumn _border="none" _width="85vw">
                    {body_exercise.map((routine, idx) => (
                        <FlexRow
                            _width="85vw"
                            _height="60px"
                            _border="none"
                            _justify="space-between"
                            _others="border-bottom:1px solid lightgray"
                            key={idx}
                        >
                            <Text _fontSize="11px" _margin="10px 0">
                                {routine}
                            </Text>
                            <Check />
                        </FlexRow>
                    ))}
                </FlexColumn>
            )}
        </>
    )
}

RoutineSelect.defaultProps = {
    stretching: [
        '????????? ????????????',
        '??? ?????????',
        '?????? ?????????',
        '?????? ?????????',
        '??? ?????????',
        '??????, ?????? ?????????',
        '?????? ?????????',
        '????????? ????????????',
        '?????? ?????? ??? ??????',
        '?????? ?????????',
        '????????????',
        '??? ?????????',
        '????????? ????????? ?????? ??????',
    ],
    body_exercise: ['?????????', '??????', '?????????', '?????????', '?????? ?????????'],
    select: 'first',
}

export default RoutineSelect
