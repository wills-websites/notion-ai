import {createGlobalStyle} from "styled-components"
import '@splidejs/react-splide/css';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${(props) => props.theme.fluidType(0)};

    * {
      box-sizing: border-box;
    }
  }

  body {
    margin: 0;
    // Use system fonts: https://css-tricks.com/snippets/css/system-font-stack/
    font-family: GraphikType, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: ${(props) => props.theme.colours.black};
    background-color: ${(props) => props.theme.colours.white};
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    line-height: 1.1;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p,
  ol, ul, li,
  code, kbd, pre, samp {
    line-height: 1.5;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: normal;

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }
  }

  h1, .h1 {
    ${(props) => props.theme.fluidType(4)};
  }

  h2, .h2 {
    ${(props) => props.theme.fluidType(3)};
  }

  h3, .h3 {
    ${(props) => props.theme.fluidType(2)};
  }

  h4, .h4 {
    ${(props) => props.theme.fluidType(1)};
  }

  h5, .h5 {
    ${(props) => props.theme.fluidType(0)};
  }

  h6, .h6 {
    ${(props) => props.theme.fluidType(-1)};
  }

  li {
    margin-top: 0;
    margin-bottom: 0;
  }

  small, p.small {
    ${(props) => props.theme.fluidType(-1)};
  }

  code, kbd, pre, samp {
    font-family: monospace;
    white-space: normal;
  }

  ul {
    padding-left: 1rem;
    list-style-type: disc;
  }

  ol {
    padding-left: 1rem;
    list-style-type: decimal;
  }

  video {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  // Specific to PrismicRichText component
  .block-img {
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 3rem 0;
    }
  }

  // Specific to PrismicRichText component
  .embed {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin: 3rem 0;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  em, i {
    font-style: normal;
    color: ${props => props.theme.colours.grey}
  }

  strong, b {
    font-weight: bold;
  }

  blockquote {
    font-weight: bold;
    padding-left: 1rem;
  }

  a {
    color: inherit;
  }

  sup, sub {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
  }

  sub {
    top: 0.4em;
  }

  label {
    ${(props) => props.theme.fluidType(-1)};
    line-height: 1.2;
    font-weight: normal;
  }

  .fieldset {
    margin: 0.5rem 0;
  }

  .text-input,
  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="range"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  textarea {
    display: block;
    font-family: inherit;
    ${(props) => props.theme.fluidType(0)};
    padding: 0.2rem 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid;
    border-radius: 2px;
    line-height: 1.6;
    background-color: transparent;
    -webkit-appearance: none;

    &:focus {
      border: 1px ${(props) => props.theme.colours.focus} solid;
    }
  }

  ::placeholder {
    color: ${props => props.theme.colours.black};
    opacity: 0.6;
  }

  .file-input,
  input[type="file"],
  .radio-input,
  input[type="radio"],
  .checkbox-input,
  input[type="checkbox"],
  select {
    font-family: inherit;
  }

  // Select

  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 2rem;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    color: ${props => props.theme.colours.black};
  }

  select::-ms-expand {
    display: none;
  }

  .fieldset.select {
    width: 100%;
    border-bottom: 1px solid;
    border-radius: 0;
    padding: 0;
    margin: 0.5rem 0 1.5rem 0;
    ${props => props.theme.fluidType(0)};
    cursor: pointer;
    line-height: 1.1;
    background-color: transparent;
    grid-template-areas: "select";
    display: grid;
    align-items: center;
    max-width: 15rem;

    &:after {
      content: "";
      width: 0.8rem;
      height: 0.5rem;
      background-color: ${props => props.theme.colours.black};
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
    }

    select,
    &:after {
      grid-area: select;
    }
  }

  .button,
  button,
  input[type="submit"],
  input[type="button"],
  input[type="reset"] {
    display: inline-block;
    padding: 0 1rem;
    font-family: inherit;
    ${(props) => props.theme.fluidType(0)};
    text-decoration: none;
    line-height: 2;
    white-space: nowrap;
    border: 1px solid;
    border-radius: 1rem;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    width: min-content;

    p {
      margin: 0.25rem;
    }

    &:hover {
      text-decoration: none;
    }

    &.light {
      border: none;
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};

      :hover {
        color: ${props => props.theme.colours.white};
        background-color: ${props => props.theme.colours.black};
      }
    }

    &.neutral {
      border: none;
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.lightgrey};

      :hover {
        color: ${props => props.theme.colours.white};
        background-color: ${props => props.theme.colours.black};
      }
    }

    &.dark {
      border: none;
      color: ${props => props.theme.colours.white};
      background-color: ${props => props.theme.colours.lightgrey};

      :hover {
        color: ${props => props.theme.colours.black};
        background-color: ${props => props.theme.colours.white};
      }
    }

    &.indigo {
      border: none;
      color: ${props => props.theme.colours.white};
      background-color: ${props => props.theme.colours.indigo};

      :hover {
        color: ${props => props.theme.colours.black};
        background-color: ${props => props.theme.colours.white};
      }
    }

    &.link {
      border: none;
      padding: 0;
      background-color: transparent;
    }

    &.icon {
      border: none;
      background-color: transparent;

      svg {
        height: 1rem;
        width: auto;
        display: block;
      }
    }
  }

  .transparent {
    background-color: rgba(150, 150, 150, 0.25);

    button, .button {
      border: none;
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};

      :hover {
        color: ${props => props.theme.colours.white};
        background-color: ${props => props.theme.colours.black};
      }
    }
  }

  .indigo {
    background-color: ${props => props.theme.colours.indigo};
    color: ${props => props.theme.colours.white};

    button, .button {
      border: none;
      color: ${props => props.theme.colours.white};
      background-color: ${props => props.theme.colours.black};

      :hover {
        color: ${props => props.theme.colours.black};
        background-color: ${props => props.theme.colours.white};
      }
    }
  }

  .white {
    background-color: ${props => props.theme.colours.white};
    color: ${props => props.theme.colours.black};

    > div :first-child {
      color: ${props => props.theme.colours.indigo};
    }
  }

  button, .button {
    border: none;
    color: ${props => props.theme.colours.white};
    background-color: ${props => props.theme.colours.black};
  }

  .black {
    background-color: ${props => props.theme.colours.black};
    color: ${props => props.theme.colours.white};

    p:first-child {
      color: ${props => props.theme.colours.indigo};
    }

    button, .button {
      border: none;
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};

      :hover {
        color: ${props => props.theme.colours.black};
        background-color: ${props => props.theme.colours.white};
      }
    }
  }

  .enterprise {
    background-color: ${props => props.theme.colours.darkpurple};
    color: ${props => props.theme.colours.white};

    button, .button {
      border: none;
      color: ${props => props.theme.colours.black};
      background-color: ${props => props.theme.colours.white};

      :hover {
        color: ${props => props.theme.colours.white};
        background-color: ${props => props.theme.colours.black};
      }
    }
  }

  .dark-theme {
    background-color: ${props => props.theme.colours.enterprise};
    color: ${props => props.theme.colours.white};
  }

  .errorMsg {
    color: ${(props) => props.theme.colours.error};
  }
`

export default GlobalStyle
