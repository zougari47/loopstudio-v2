import { Contact } from './Footer.styled';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as IconFacebook } from '../../img/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../../img/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '../../img/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../../img/icon-instagram.svg';

export default function Footer() {
  return (
    <Contact id="support">
      <a href="#about" id="logo">
        <Logo />
      </a>

      <ul className="links">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#careers">careers</a>
        </li>
        <li>
          <a href="#product">events</a>
        </li>
        <li>
          <a href="#product">products</a>
        </li>
        <li>
          <a href="#support">support</a>
        </li>
      </ul>

      <ul className="social">
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconPinterest />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconInstagram />
          </a>
        </li>
      </ul>

      <p>&copy; Loopsstudios. All rights reserved.</p>
    </Contact>
  );
}
