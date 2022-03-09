import { Nav } from './Header.styled';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';

export default function Header() {
  const navbarBackground = useRef(null);
  const firstBar = useRef(null);
  const secondBar = useRef(null);
  const thirdBar = useRef(null);

  let isAnimate = false; // this variable to fix multiple click from the user
  let isMenuOpen = false;

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        gsap.set(navbarBackground.current, {
          translateX: 0
        });

        gsap.set(navbarBackground.current.children, {
          translateX: 0
        });
      } else {
        gsap.set(navbarBackground.current, {
          translateX: '-100vw'
        });
      }
    });
  }, []);

  const clickNavItem = () => {
    if (window.innerWidth < 992) {
      closeMenu();
    }
  };

  const closeMenu = () => {
    // slide out background
    gsap.to(navbarBackground.current, {
      duration: 0.3,
      translateX: '-100vw'
    });
    //   slide out links
    gsap.set(navbarBackground.current.children, {
      translateX: 0
    });

    // animation of menu button
    gsap.to(firstBar.current, {
      duration: 0.5,
      top: 0,
      transform: 'rotate(0)'
    });
    gsap.to(secondBar.current, {
      duration: 0.5,
      top: '50% ',
      opacity: 1
    });
    gsap.to(thirdBar.current, {
      duration: 0.5,
      top: '100% ',
      transform: 'rotate(0)'
    });
  };

  const openMenu = () => {
    // slide in background
    gsap.to(navbarBackground.current, {
      duration: 0.8,
      translateX: 0
    });
    // slide in links
    gsap.from(navbarBackground.current.children, {
      duration: 0.5,
      translateX: '-1000px',
      stagger: 0.35
    });

    // animation of menu button
    gsap.to(firstBar.current, {
      duration: 0.5,
      top: '50% ',
      transform: 'rotate(-45deg)'
    });
    gsap.to(secondBar.current, {
      duration: 0.5,
      top: '50% ',
      opacity: 0
    });
    gsap.to(thirdBar.current, {
      duration: 0.5,
      top: '50% ',
      transform: 'rotate(45deg)'
    });
  };

  function toggleMenu() {
    if (!isAnimate) {
      isAnimate = true;
      if (!isMenuOpen) {
        openMenu();
        isMenuOpen = !isMenuOpen;
      } else {
        closeMenu();
        isMenuOpen = !isMenuOpen;
      }
      setTimeout(function () {
        isAnimate = false;
      }, 2000);
    }
  }

  return (
    <Nav>
      {/* Logo */}
      <a href="#" id="logo">
        <Logo />
      </a>

      {/* Menu Button */}
      <span id="menu_button" onClick={toggleMenu}>
        <span className="bar-1" ref={firstBar}></span>
        <span className="bar-2" ref={secondBar}></span>
        <span className="bar-3" ref={thirdBar}></span>
      </span>

      {/* Navbar */}
      <ul ref={navbarBackground} className="navbar_list">
        <li className="nav_item" onClick={clickNavItem}>
          <a className="nav_link" href="#about">
            about
          </a>
        </li>

        <li className="nav_item" onClick={clickNavItem}>
          <a className="nav_link" href="#careers">
            careers
          </a>
        </li>

        <li className="nav_item" onClick={clickNavItem}>
          <a className="nav_link" href="#product">
            events
          </a>
        </li>

        <li className="nav_item" onClick={clickNavItem}>
          <a className="nav_link" href="#product">
            products
          </a>
        </li>

        <li className="nav_item" onClick={clickNavItem}>
          <a className="nav_link" href="#support">
            support
          </a>
        </li>
      </ul>
    </Nav>
  );
}
