import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabBox = ({ is_active, text, _onClick }) => {
    _onClick = () => {
        !is_active ? (is_active = true) : (is_active = false)
    }
    return (
        <>
            <TabBoxEl is_active={is_active} onClick={_onClick}>
                {text}
            </TabBoxEl>
        </>
    )
}

TabBox.propTypes = {
    is_active: PropTypes.bool,
    text: PropTypes.string.isRequired,
    _onClick: PropTypes.func,
}

TabBox.defaultProps = {
    is_active: false,
    text: '루틴',
    _onClick: () => {},
}

const TabBoxEl = styled.button`
    min-width: 120px;
    width: 50vw;
    height: 48px;
    background-color: #fff;
    border: none;
    font-size: 14px;
    ${() => (is_active ? `border-bottom: 2px solid #6B76FF;` : `border-bottom: 2px solid none;`)}
    ${() => (is_active ? `color: black` : `color: #A5ABB0`)};
`

export default TabBox
