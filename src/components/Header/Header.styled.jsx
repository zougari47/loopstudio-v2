import styled from 'styled-components';
import { device, hoverEffect } from '../../global-styled';

export const Nav = styled.header`
  width: 100vw;
  height: 9vh;
  position: fixed;
  top: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 36;
  @media ${device.lg} {
    position: absolute;
    max-width: 1500px;
    left: 50%;
    transform: translateX(-50%);
  }

  #logo {
    width: 40%;
    max-width: 200px;
    margin-left: 10%;

    img {
      width: 100%;
    }
  }

  #menu_button {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    width: 25px;
    height: 15px;
    margin-right: 10%;
    @media ${device.lg} {
      display: none;
    }

    span {
      width: 100%;
      height: 3px;
      background: white;
      border-radius: 5px;
      position: absolute;
      left: 0;
    }

    span:nth-child(1) {
      top: 0;
    }

    span:nth-child(2) {
      top: 50%;
    }

    span:nth-child(3) {
      top: 100%;
    }
  }

  ul {
    background-color: var(--Black);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(-100vw);

    @media ${device.lg} {
      transform: translateX(0);
      height: 100%;
      width: 48%;
      position: static;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      margin-right: 10%;
      font-weight: bolder;
    }

    li {
      margin-bottom: 2rem;
      margin-left: 10%;
      position: relative;
      width: fit-content;

      &:hover::before {
        ${hoverEffect}
      }

      @media ${device.lg} {
        margin-bottom: 0;
        margin-left: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 2rem;
        font-family: 'Josefin Sans', sans-serif;
        color: var(--White);
        transition: border 0.5s ease-in-out;

        @media ${device.lg} {
          font-size: 1rem;
        }
      }
    }
  }
`;
