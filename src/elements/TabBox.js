import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabBox = ({ text }) => {
    const [is_active, setActive] = useState(false)

    return (
        <>
            <TabBoxEl
                is_active={is_active}
                onClick={() => (is_active ? setActive(false) : setActive(true))}
            >
                {text}
            </TabBoxEl>
        </>
    )
}

TabBox.propTypes = {
    text: PropTypes.string.isRequired,
    _onClick: PropTypes.func.isRequired,
}

TabBox.defaultProps = {
    text: '루틴',
}

const TabBoxEl = styled.button`
    min-width: 120px;
    width: 50vw;
    height: 48px;
    background-color: #fff;
    font-size: 14px;
    border: none;
    ${(props) =>
        props.is_active ? `border-bottom: 2px solid #6B76FF;` : `border-bottom: 2px solid none;`}
    ${(props) => (props.is_active ? `color: black` : `color: #A5ABB0`)};
`

export default TabBox
