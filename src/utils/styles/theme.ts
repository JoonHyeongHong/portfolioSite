import { DefaultTheme } from 'styled-components';
import color from './color';

// theme 지정
const navTheme: DefaultTheme = {
    color: {
        background: color.gray,
        main: color.lightBlue,
        sub: color.white,
        text: color.white,
        defaultText: color.black,
        buttonText: color.darkgray,
        buttonBackground: color.lightgray,
    },
};

const darkTheme: DefaultTheme = {
    color: {
        background: '#',
        main: '#',
        sub: 'white',
    },
};

export { navTheme, darkTheme };
