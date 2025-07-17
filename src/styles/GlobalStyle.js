import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-optical-sizing: auto;
    font-style: normal;
    background-color: ${(props) => props.theme.color.background};
    }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  html,
body,
header,
nav,
main,
article,
section,
aside,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
span,
ul,
ol,
fieldset,
legend,
label,
form,
input,
button,
select,
option,
textarea,
pre {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
  vertical-align: baseline;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img,
svg {
  display: block;
  max-width: 100%;
}

ul,
ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
