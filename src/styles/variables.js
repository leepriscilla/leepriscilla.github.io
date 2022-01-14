import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #0e0e10; //dark-black
    --navy: #18181b; //black
    --light-navy: #1f1f23; //light-black
    --lightest-navy: #272729; //lightest-black
    --navy-shadow: rgba(24, 24, 27, 0.7); //black-shadow
    --dark-slate: #848494; //dark-grey
    --slate: #a5a8aa; //grey
    --light-slate: #dedee3; //light-grey
    --lightest-slate: #e6e6ea; //lightest-grey
    --white: #f7f7f8; //white
    --green: #efeff1; //ivory
    --green-tint: rgba(239, 239, 241, 0.1); //ivory-tint
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
