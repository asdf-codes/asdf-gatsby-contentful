import React from 'react'

import Img from 'gatsby-image'
import {Item, Links, LinksCover} from '../style'

export const Card = ({ fluid, name, slug}) => {
    return(
        <Item>
            <Links to={`/${slug}`}>
                <LinksCover>
                    <Img fluid={fluid} imsStyle={{}}
                            style={{
                            maxWidth: "500px",
                            margin: "0 auto",
                    }}/>
                </LinksCover>
            </Links>
        </Item>
    )
}