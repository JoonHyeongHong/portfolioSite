import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

//전역 css
const GlobalStyle = createGlobalStyle`
    ${normalize}
    html,
    body{
        overflow:hidden;
    }

    * {
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'AppleSDGothicNeo';
        src: url(${process.env.PUBLIC}/font/AppleSDGothicNeoR.woff2);
    }

    @font-face {
        font-family : 'Montserrat';
        src: url(${process.env.PUBLIC}/font/Montserrat.ttf);
        unicode-range: U+0041-005A,U+0061-007A;
    }

    @font-face {
        font-family : 'Montserrat-italic';
        font-style: italic;
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/Montserrat-Italic.ttf);
        unicode-range: U+0041-005A,U+0061-007A;
    }

    @font-face {
        font-family: 'EliceRegular';
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/EliceRegular.ttf);
        unicode-range:U+AC00-U+D7A3;
    }

    @font-face {
        font-family: 'EliceBold';
        font-weight: 300;
        src: url(${process.env.PUBLIC}/font/EliceBold.ttf);
        unicode-range:U+AC00-U+D7A3, U+0030-0039;
    }

`;

export default GlobalStyle;