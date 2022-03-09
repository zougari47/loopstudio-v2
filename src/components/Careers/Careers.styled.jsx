import styled from 'styled-components';
import { device } from '../../global-styled';

export const Section = styled.div`
  width: 100vw;
  max-width: 480px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.md} {
    max-width: none;
    flex-direction: row;
    padding: 5rem 0 5rem 10%;
    max-width: 1500px;
    max-height: 900px;
  }

  img {
    width: 80%;
    max-height: 400px;
    margin: 1rem auto;

    @media ${device.md} {
      min-width: 500px;
      min-height: 400px;
    }
  }

  section {
    width: 80%;
    text-align: center;
    margin: auto;
    @media ${device.md} {
      background: var(--White);
      position: relative;
      top: 100px;
      right: 160px;
      min-width: 500px;
      text-align: left;
      padding-left: 1rem;
      min-width: 400px;
    }

    h1 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: bolder;
      font-size: 1.65rem;
      margin: 1rem 0;
      line-height: 1.3;
    }

    p {
      font-family: 'Alata', sans-serif;
      line-height: 1.4;
      color: var(--Dark-Gray);
      margin: 1rem 0;
    }
  }
`;
