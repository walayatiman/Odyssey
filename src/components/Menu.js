import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

const MobileMenu = styled(motion.ul)`
  width: 50%;
  height: 100vh;
  top: 0;
  margin: 0;
  right: 0;
  display: none;
  background-color: #1e1e1e;
  padding-top: 20%;
  font-size: clamp(1.5rem, 0.775rem + 0.1875vw, 1rem);
  position: fixed;
`

const Hamburger = styled.button`
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  section {
    display: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background-color: #fff;
    border-radius: 6px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;
  }

  &:hover span:nth-child(2) {
    transform: translateX(10px);
    background-color: #fe9c2f;
  }

  .open span:nth-child(1) {
    transform: translate(0px, -2px) rotate(45deg);
  }

  .open span:nth-child(2) {
    transform: translateX(15px);
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: translate(-3px, 3px) rotate(-45deg);
  }

  .open:hover span {
    background-color: #fe9c2f;
  }

  @media (max-width: 820px) {
    section {
      display: block;
    }
  }
`

const DesktopMenu = styled.ul``

const HeaderContainer = styled.nav`
  max-width: 1140px;
  margin: 0 auto;
  color: #fff;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Hamburger}, ${MobileMenu} {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: #fff;
        &: visited {
          color: #fff;
        }
      }
    }
  }

  img {
    max-width: 150px;
  }

  @media (max-width: 820px) {
    ul {
      display: none;
    }

    ${Hamburger} {
      display: block;
    }

    ${DesktopMenu} {
      display: none;
    }

    ${MobileMenu} {
      display: block;
    }
  }
`

const Header = styled.header`
  width: 100%;
  background-color: #222;
  padding: 1rem;
  position: absolute;
  z-index: 2;
  top: 0;
`

const variants = {
  open: { x: "40%" },
  closed: { x: "100%" },
}

const Menu = () => {
  const query = useStaticQuery(graphql`
    query logoquery {
      file(relativePath: { eq: "odyssey.svg" }) {
        publicURL
      }
    }
  `)

  const [extendNavbar, setExtendNavbar] = useState(false)
  const [isActive, setActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
    setIsOpen(!isOpen)
  }

  return (
    <Header className={isActive ? "opened" : null}>
      <HeaderContainer extendNavbar={extendNavbar}>
        <img src={query.file.publicURL} alt="logo" />

        <DesktopMenu>
          <li>
            <a href="/#home-section">Home</a>
          </li>
          <li>
            <a href="/#services-section">Services</a>
          </li>
          <li>
            <a href="/#about-section">About</a>
          </li>

          <li>
            <a href="/#contact-section">Contact</a>
          </li>
        </DesktopMenu>

        <Hamburger onClick={toggleClass}>
          <section className={extendNavbar ? "open" : "closed"}>
            <span></span>
            <span></span>
            <span></span>
          </section>
        </Hamburger>

        <MobileMenu
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            type: "spring",
            stiffness: 300,
          }}
        >
          <li>
            <a href="#home-section">Home</a>
          </li>
          <li>
            <a href="#services-section">Services</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>

          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </MobileMenu>
      </HeaderContainer>
    </Header>
  )
}

export default Menu
