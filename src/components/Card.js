import React from 'react'

import Img from 'gatsby-image'
import {Item, Links, LinksCover} from '../style'

export const Card = ({key, fluid, name, slug}) => {
    return(
        <Item>
            <Links to={slug}>
                <LinksCover>
                    <Img fluid={fluid} style={{
                            maxWidth: "500px",
                            margin: "0 auto",
                    }}/>
                </LinksCover>
            </Links>
        </Item>
    )
}