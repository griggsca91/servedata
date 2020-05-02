  export const stylists = {
    aux_page,
    holyGrid,
    profileGrid,
    header,
    nav,
    footer,
    section, 
    content,
    profileContent,
    section,
    error,
    funnyImage,
    responsiveList,
    verticalTabs,
    form,
    toast
  };

  export function all(...styles) {
    const func = styles.some(s => s instanceof Function);
    if ( ! func ) {
      return Object.assign({}, ...styles);
    } else {
      return (...args) => {
        styles = styles.map(s => {
          if ( s instanceof Function ) {
            s = s(...args);
          }
          return s;
        });
        return Object.assign({}, ...styles);
      };
    }
  }

  function error() {
    return `
      * {
        background: snow;
      }

      * section.message {
        padding: var(--pad2);
      }
    `;
  }

  function funnyImage() {
    return `
      * {
        display: block;
        margin: 3rem auto;
        padding: var(--pad2);
        min-width: 30%;
        max-width: 88vw;
      }
    `;
  }

  function verticalTabs() {
    return `
      * li {
        border-bottom: thin solid var(--grey);
      }

      * li a {
        color: inherit;
        text-decoration: none;
        cursor: default;
      }

      * li:hover,
      * li:active {
        background: var(--smoke);
      }
    `;
  }

  function aux_page() {
    return `
      * {
        background: var(--smoke);
      }
    `;
  }

  function profileGrid() {
    return `
      * {
        display: grid;
        grid-template-areas: 
          "header header"
          "tabs content"
          "footer footer";
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto;
        grid-gap: var(--pad2);
        min-height: 100%;
        box-sizing: border-box;
      }

      * a {
        color: var(--blue);
      }

      * a.brand-link {
        font-size: 2em;
      }

      * .button-like {
        padding: var(--pad1);
        border: 0.25em solid;
        display: inline-block;
        background: transparent;
        color: var(--white);
        font-variant: small-caps;
      }

      @media screen and (max-width: 640px) {
        * a.button-like {
          margin: var(--pad1);
        }
      }

      * a.author-cite {
        color: var(--grey);
      }

      * .vertical-tabs {
        grid-area: tabs;
        display: table; 
        background: var(--white);
        border: thin solid var(--grey);
        margin-left: var(--pad2);
      }

      * .vertical-tabs ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      * .vertical-tabs li {
        padding: 0.5rem 1rem;
        margin: 0;
      }

      * .content {
        grid-area: content;
        margin-right: var(--pad2);
        background: var(--white);
        border: thin solid var(--grey);
      }
    `;
  }

  function holyGrid() {
    return `
      * {
        display: grid;
        grid-template-areas: 
          "header header header"
          "nav content aside"
          "footer footer footer";
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr auto;
        height: 100%;
      }

      * a {
        color: var(--blue);
      }

      * a.brand-link {
        font-size: 2em;
      }

      * .button-like {
        padding: 0;
        padding: var(--pad1);
        border: 0.25em solid;
        display: inline-block;
        background: transparent;
        color: var(--white);
        font-variant: small-caps;
      }

      @media screen and (max-width: 640px) {
        * a.button-like {
          margin: var(--pad1);
        }
      }

      * a.author-cite {
        color: var(--grey);
      }
    `;
  }

  function header() {
    return `
      * {
        grid-area: header;
        background: linear-gradient(to right, var(--left), var(--right));
        padding: 0 var(--pad2);
      }

      * a {
        color: var(--white);
        font-variant: small-caps;
        text-decoration: none;
      }
    `;
  }

  function nav() {
    return `
      *.vertical {
        
      }
    `;
  }

  function footer() {
    return `
      * {
        grid-area: footer;
        background: var(--smoke);
      }
    `;
  }

  function profileContent() {
    return `
      * {
        grid-area: content;
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem;
      }

      * article h1 {
        margin: 0.5rem 0;
      }
    `;
  }

  function content() {
    return `
      * {
        grid-area: content;
        display: flex;
        flex-direction: column;
      }

      * article h1 {
        margin: 0.5rem 0;
      }
    `;
  }

  function section() {
    return `
      * {
        flex-grow: 1;
        min-height: 300px;
      }

      *:nth-of-type(2n) {
        background: var(--smoke);
      }

      * h1 {
        text-align: center;
      }
    `;
  }

  function responsiveList() {
    return `
      * {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 0;
        padding: var(--pad1);
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      * a {
        text-decoration: none; 
      }

      * li {
      }
    `;
  }

  function form() {
    return `
      * {
        display: table;
        margin: 0 auto;
        padding-top: 1rem;
      }

      *.full-width {
        display: block;
        width: 100%;
      }

      * fieldset {
        border: thin solid;
        border-top: 1rem solid var(--right);
        background: var(--white);
      }

      * label {
        display: flex;
        justify-content: space-between;
      }

      * input {
        margin-left: 2rem;
      }

    `
  }

  function toast() {
    return `
      *.notification {
        display: table;
        margin: 0 auto;
        background: var(--white);
        padding: 0.5rem;
        margin-top: 0.5rem;
        border: thin solid;
        border-top: 1rem solid var(--left);
      }
    `;
  }
