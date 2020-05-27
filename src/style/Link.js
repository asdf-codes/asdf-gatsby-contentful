import styled from 'styled-components'
import {Link} from 'gatsby'
import React from 'react'

export const Links = styled(props => <Link {...props}/>)`
    
    
    

`

export const LinksCover = styled.div `
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.1);
    
    }
`