import { css } from 'styled-components'

const Vars = css`
  :root {
    //* Colours Main
    --main: #f8db51;
    --gold: #a8954d;
    --background: #3f1d20;
    --grey: #333333;
    --white: #ffffff;
    --black: #000000;
    //* Colours Secondary
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;

    //* Fonts
    --fontMain: 'ModestoPoster', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontSecondary: 'ModestoCondensed', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    --body: 'OpenSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';

    //* Widths
    --maxWidth: 1360px;
    --auto: 0 auto;

    //* Transition
    --transition: all 0.25s ease-in-out;
  }
`
export default Vars
