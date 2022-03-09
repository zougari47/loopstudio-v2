import styled from 'styled-components';
import { device, hoverEffect } from '../../global-styled';

export const Contact = styled.footer`
  background: var(--Black);
  display: grid;
  place-items: center;
  width: 100vw;
  grid-gap: 2rem;
  padding: 2rem 0;
  margin: auto;
  @media ${device.md} {
    grid-template-columns: 1fr 1fr;
    place-items: none;
    grid-gap: 0;
    position: relative;
    min-height: 200px;
    max-width: 1500px;
  }

  #logo {
    margin-left: 0;
    @media ${device.md} {
      position: absolute;
      left: 10%;
      top: 10%;
    }
    svg {
      margin-top: 1rem;
      max-width: 200px;
      @media ${device.md} {
        margin-top: 0;
      }
    }
  }

  .links {
    @media ${device.md} {
      display: flex;
      grid-row: 2;
      position: absolute;
      left: 10%;
      top: 40%;
      width: 50%;
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      width: 40%;
      max-width: 500px;
    }
    li {
      width: fit-content;
      margin: 0 auto 0.5rem;
      padding-bottom: 0.3rem;
      position: relative;
      @media ${device.md} {
        margin: 0;
        padding-bottom: 0;
      }

      &:hover::before {
        ${hoverEffect}
      }

      a {
        text-decoration: none;
        text-transform: capitalize;
        color: var(--White);
      }
    }
  }

  .social {
    display: flex;
    margin: auto;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
    position: static;
    @media ${device.md} {
      position: absolute;
      right: 10%;
      top: 10%;
    }

    a {
      svg {
        cursor: pointer;

        &:hover {
          outline: 1px solid white;
          outline-offset: 4px;
        }
      }
    }
  }

  p {
    color: var(--Very-Dark-Gray);
    @media ${device.md} {
      position: absolute;
      right: 10%;
      top: 40%;
      font-size: 0.8rem;
    }
  }
`;
