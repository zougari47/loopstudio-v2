import { createGlobalStyle } from 'styled-components';

const breakpoints = {
  sm: '576px',
  md: ' 768px',
  lg: '992px',
  xl: ' 1200px',
  xxl: '1400px'
};

export const device = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`
};

const GlobalStyle = createGlobalStyle`
    // colors
    :root{
        --White: hsl(0, 0%, 100%);
        --Black: hsl(0, 0%, 0%);
        --Dark-Gray: hsl(0, 0%, 55%);
        --Very-Dark-Gray: hsl(0, 0%, 41%);
        --font-size:16px;
    }

    // reset 
    html {
        box-sizing: border-box;
        font-family: 'Alata', sans-serif;
        scroll-behavior:smooth ;
        @media ${device.sm}{
            font-size:calc(var(--font-size)*1.15);
        }
        
        @media ${device.md}{
            font-size:calc(var(--font-size)*1.22);      
        }

        @media ${device.lg}{
            font-size:calc(var(--font-size)*1.3);      
        }

        @media ${device.xl}{
            font-size:calc(var(--font-size)*1.38);      
        }
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin:0 ;
        padding: 0;
        list-style: none;
    }

    body{
        overflow-x: hidden;
    }
   
   header{
       /* display: none; */
       /* background:black; */
   }
`;

export const hoverEffect = `
content: '';
width: 65%;
height: 1px;
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, -50%);
margin: auto;
background: var(--White);
transition: all 0.4s ease-in-out;
`;

export default GlobalStyle;
