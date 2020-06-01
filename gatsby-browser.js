import React from 'react'
import { createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/theme"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, html {
        background: #E5E5E5;
        height: 100%;
    }

    a, u {
    text-decoration: none;
    }
`

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
            {element}
    </ThemeProvider>
)