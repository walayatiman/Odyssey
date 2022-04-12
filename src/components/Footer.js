import React from "react"
import styled from "styled-components"
import {
  HiLocationMarker,
  HiPhone,
  HiOutlinePrinter,
  HiOutlineDeviceMobile,
} from "react-icons/hi"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const FootParent = styled.footer`
  background-color: #333333;
`
const Foot = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;
  display: flex;
  gap: 3rem;

  section {
    flex: 1 1 0;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 25px;
    color: #ff9c2d;
    font-weight: 400;
  }

  p {
    color: #939393;
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 5% 5%;
  }

  @media (max-width: 768px) {
    gap: 0rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const Blurb = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    margin: 0;
    line-height: normal;
    font-weight: 400;
    color: #fff;
    font-size: 18px;
  }
`

const Social = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    svg {
      transition: all 0.3s ease-in-out;
      &:hover {
        color: rgba(255, 255, 255, 1) !important;
      }
    }
  }
`

const Contact = styled(motion.div)`
  flex: 50%;
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    ${Blurb} {
      flex: 45%;
      margin-bottom: 2rem;
    }
  }
`

const About = styled(motion.div)`
  flex: 50%;

  ul {
    padding: 0;
    li {
      color: #939393;
      font-size: 14px;
      list-style: none;
    }
  }

  p {
    margin-bottom: 50px;
    text-align: justify;
    padding-right: 15%;
  }

  @media (max-width: 425px) {
    margin-bottom: 10%;
    p {
      padding-right: 0;
    }
  }
`

const Copy = styled.div`
  text-align: center;
  background-color: #0f0f0f;
  color: #939393;
  font-size: 14px;
  padding: 1% 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #939393;
  text-decoration: none;

  &:visited {
    color: #939393;
  }

  &:hover {
    color: #ff9c2d;
  }
`

const Footer = () => {
  return (
    <FootParent id="contact-section">
      <Foot>
        <About
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <h2>About Odyssey Driving School </h2>
          <p>
            Founded in 2005, Odyssey Driving School’s primary objective is to
            provide the best driver education in the city. Building on its
            strong advocacy for road safety and defensive driving, all of
            Odyssey’s training programs are designed to teach driving skills for
            a lifetime of safety and enjoyment.
          </p>
          <h2>Courses</h2>
          <ul>
            <li>Theoretical Driving Course (TDC)</li>
            <li>Practical Driving Course (PDC) </li>
            <li>Defensive Driving Course</li>
          </ul>

          <Social>
            <a
              href="https://www.facebook.com/odyssey.driving.school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook color="rgba(255, 255, 255, 0.5)" fontSize="1.5rem" />
            </a>
            <a
              href="https://www.facebook.com/odyssey.driving.school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram color="rgba(255, 255, 255, 0.5)" fontSize="1.5rem" />
            </a>
          </Social>
        </About>
        <Contact
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <h2>Quick Contact</h2>
          <section>
            <Blurb>
              <div>
                <HiLocationMarker color="#ff9c2d" fontSize="1.5rem" />
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  3rd Floor, Almirante Building (In front of Landbank) Corner of
                  Velez and Luna Streets, Cagayan de Oro City 9000
                </p>
              </div>
            </Blurb>
            <Blurb>
              <div>
                <HiOutlineDeviceMobile color="#ff9c2d" fontSize="1.5rem" />
              </div>
              <div>
                <h3>Mobile numbers</h3>
                <p>(+63) 9215544816 (Smart)</p>
                <p>09162415318 (Globe)</p>
                <p>09228752182 (Sun)</p>
                <p>09177088129 (Globe)</p>
              </div>
            </Blurb>
            <Blurb>
              <div>
                <HiPhone color="#ff9c2d" fontSize="1.5rem" />
              </div>
              <div>
                <h3>Phone</h3>
                <p>(+63) (8822) 714115</p>
              </div>
            </Blurb>
            <Blurb>
              <div>
                <HiOutlinePrinter color="#ff9c2d" fontSize="1.5rem" />
              </div>
              <div>
                <h3>Telefax</h3>
                <p>(+63) (88) 8565054</p>
              </div>
            </Blurb>
          </section>
        </Contact>
      </Foot>
      <Copy>
        Copyright ©{new Date().getFullYear()} Odyssey Driving School. All Rights
        Reserved. | <StyledLink to="archive">Archive</StyledLink>
      </Copy>
    </FootParent>
  )
}

export default Footer
