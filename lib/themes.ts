
import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'


const styles = {
    global: (props: Dict<any> | StyleFunctionProps) => ({
        body: {
            bg: mode('paleSilver', 'jet')(props)
        }
    })
}

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 10,
                marginBottom: 4
            }
        }
    },
}

const colors = {
    jet: '#333333',
    cultured: '#F6F6F3',
    paleSilver: '#C1BCAC'
}

// extend the theme
export const theme = extendTheme({ styles, config, fonts, colors, components })
