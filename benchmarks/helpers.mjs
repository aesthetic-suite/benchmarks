export function createCssRule(ampersand = false) {
  return {
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: '1rem',
    border: '1px solid transparent',
    backgroundColor: 'black',
    color: 'white',
    [`${ampersand ? '&' : ''}:hover`]: {
      color: 'gray',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
    '@supports (display: flex)': {
      display: 'flex',
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
    @media (max-width: 600px) {
      width: 100%;
    }
    @supports (display: flex) {
      display: flex;
    }
  `;
}
