import React from 'react'
import styled from 'styled-components'
import ImageFilter from '../ImageFilter'
import Item from '../Item'

const Items = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: .2em 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .3em;
    font-size: clamp(0.6rem,1vw + .5rem , .7rem);
`

export default (props) =>{
    return (
        <Items>
            {ImageFilter(props.type)}
            <Item {...props}/>
            <span>{props.date}</span>
        </Items>
    )
}