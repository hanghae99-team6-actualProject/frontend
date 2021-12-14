import React from 'react'
import styled from 'styled-components'

const ActiveUnderLine = (props) => {
    const { active, children, _onClick } = props
    const styles = { active }

    return (
        <ActiveUnderLineEl {...styles} onClick={_onClick}>
            {children}
        </ActiveUnderLineEl>
    )
}

ActiveUnderLine.defaultProps = {
    _onClick: () => {},
    active: false,
}

const ActiveUnderLineEl = styled.button`
    min-width: 120px;
    width: 50vw;
    height: 48px;
    background-color: #fff;
    border: none;
    font-size: 14px;
    ${(props) =>
        props.active ? `border-bottom: 2px solid #6B76FF;` : `border-bottom: 2px solid none;`}
    ${(props) => (props.active ? `color: black` : `color: #A5ABB0`)};
`
export default ActiveUnderLine
