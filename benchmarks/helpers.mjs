export function createCssRule(ampersand = false) {
  const amp = ampersand ? '&' : '';

  return {
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: '1rem',
    border: '1px solid transparent',
    backgroundColor: 'black',
    color: 'white',
    [`${amp}:hover`]: {
      color: 'gray',
    },
    [`${amp}[disabled]`]: {
      color: 'lightgray',
      opacity: 0.75,
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
    '@supports (display: flex)': {
      display: 'flex',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
      },
    },
  };
}

export function createCssString() {
  return `
    display: block;
    position: relative;
    margin: 0;
    padding: 1rem;
    border: 1px solid transparent;
    background-color: black;
    color: white;
    &:hover {
      color: ${() => 'gray'};
    }
    &[disabled] {
      color: ${() => 'lightgray'};
      opacity: 0.75;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @supports (display: flex) {
      display: flex;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }
  `;
}
