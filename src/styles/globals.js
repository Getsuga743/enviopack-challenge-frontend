import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before,  {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    };
    *{
        box-sizing: border-box;
        margin:0;
    };
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    };
    body{
        font-family:${(props) => props.theme.fonts.main};
        font-size: 1.6rem;
        background-color:${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.black};
        cursor:default;
    };
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${(props) => props.theme.fonts.main};
    }
    a {
        text-decoration: none;
        color:${(props) => props.theme.colors.background}
    };
    li{
        list-style: none;
    };
    ul{
        margin:0;
        padding:0;
    };
    button,
    button:focus,
    button:active{
        border:1px solid black;
        background:none;
        outline:none;
        padding:0;
    };
    button span{
        position: relative;
    };
`;
export default GlobalStyles;
