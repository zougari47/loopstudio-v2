import styled from 'styled-components';
import { device } from '../../global-styled';
import hero_sm from '../../img/mobile/image-hero.jpg';

const product = [
  { img: 'image-deep-earth', text: 'deep earth' },
  { img: 'image-night-arcade', text: 'night arcade' },
  { img: 'image-soccer-team', text: 'soccer team vr' },
  { img: 'image-grid', text: 'the grid' },
  { img: 'image-from-above', text: 'from up above vr' },
  { img: 'image-pocket-borealis', text: 'pocket borealis' },
  { img: 'image-curiosity', text: 'the curiosity' },
  { img: 'image-fisheye', text: 'make it fisheye' }
]
  .map((bg, idx) => {
    return `li:nth-child(${idx + 1}){
        background-image: linear-gradient(50deg, rgb(0,0,0,0.8),transparent), 
        url("${require('../../img/mobile/' + bg.img + '.jpg')}");
        background-size:cover;
        min-height:110px;
        position:relative;
        @media ${device.md}{
          background-image: linear-gradient(50deg, rgb(0,0,0,0.8),transparent), 
          url("${require('../../img/desktop/' + bg.img + '.jpg')}");
          min-height:380px;
        }
    }
    
    li:nth-child(${idx + 1}):before{
        content: "${bg.text}";
        color: var(--White);
        width:40%;
        position:absolute;
        bottom:20%;
        left:10%;
        text-transform:uppercase;
        font-size:1.3rem;
        font-family: 'Josefin Sans', sans-serif;
        line-height:1.3;
        font-weight:300;
        @media ${device.md}{
          bottom:10%;
          // left:20%
          width:50%
        }
    }`;
  })
  .join('');

export const Product = styled.section`
  width: 100vw;
  max-width: 480px;
  margin: 4rem auto;
  display: grid;
  place-items: center;
  @media ${device.md} {
    grid-template-columns: 1fr 1fr;
    max-width: none;
    padding: 0 10%;
    position: relative;
  }
  @media ${device.lg} {
    max-width: 1500px;
    max-height: 900px;
    padding: 0;
  }

  h1 {
    width: 80%;
    margin: 2rem auto;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bolder;
    font-size: 1.65rem;
    line-height: 1.3;
    @media ${device.md} {
      margin: 0;
      margin-left: 0;
      width: 400px;
      text-align: left;
      position: absolute;
      left: 10%;
      top: 0;
    }
  }

  ul {
    display: grid;
    grid-gap: 1rem;
    width: 80%;
    margin: 1rem auto;
    @media ${device.md} {
      grid-template-columns: 1fr 1fr;
      grid-column: 1/3;
      width: 100%;
      margin-top: 3rem;
    }
    @media ${device.lg} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin: 3rem auto 0;
      width: 80%;
    }

    ${product}
  }

  button {
    width: 50%;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    min-height: 2.2rem;
    border: 1px solid var(--Black);
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--Black);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bolder;
    transition: all 0.4s ease-in-out;
    @media ${device.md} {
      position: absolute;
      top: 0;
      right: 0%;
      grid-column: 2/3;
      grid-row: 1;
    }
    @media ${device.lg} {
      right: 20%;
    }

    &:active,
    &:hover {
      background: var(--Black);
      color: var(--White);
    }
  }
`;
