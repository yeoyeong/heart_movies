import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background1};
        
        text-rendering: optimizeLegibility; /*텍스트 렌더링 방식을 설정합니다. 여기서는 가독성을 최적화하도록 설정하였습니다.*/
        -webkit-font-smoothing: antialiased; /* 이 속성은 웹킷 브라우저(예: Chrome, Safari)에서 글자의 가장자리를 부드럽게 하는 방식을 설정합니다. */
        -moz-osx-font-smoothing: grayscale; /* 이 속성은 웹킷 브라우저(예: 파이어폭스, macOS)에서 글자의 가장자리를 부드럽게 하는 방식을 설정합니다. */
        /* color-scheme: light dark; 브라우저 테마 색상을 존중하도록 지시 */
        /* color: rgba(255, 255, 255, 0.87);
        background-color: #242424; */
    }

    * {box-sizing: border-box; padding:0;}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    img {
    max-width: 100%;
    display: block;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    input, button {
    font-family: inherit;
    }

    /* HTML에서 <blockquote> 태그는 긴 인용문을 나타낼 때 사용됩니다.
    <blockquote> 태그로 묶인 텍스트는 일반적으로 들여쓰기가 적용되어 본문과 구분됨 */
    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* inherit 부모값 상속 */
    /* 브라우저 테마 색상이 밝을때 */
    /* @media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    }
    a:hover {
        color: #747bff;
    }
    button {
        background-color: #f9f9f9;
    }
    } */

`;

export default GlobalStyle;
