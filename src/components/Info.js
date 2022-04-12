import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CgArrowRight } from "react-icons/cg"

import { motion } from "framer-motion"

const InfoContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;

  h2 {
    font-size: 3rem;
    margin-bottom: 5%;
    text-transform: uppercase;
    color: #ff9c2d;
    text-align: center;
    font-weight: 400;
  }

  p {
    margin: 0 0 15px 0;
    color: #939393;
  }
`

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div {
    flex: 1 1 0;
  }

  .item-contents p {
    padding-left: 10%;
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0% 5%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    p {
      padding-left: 0 !important;
    }
  }
`

const CompanyProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div {
    flex: 1 1 0;
  }

  .item-contents p {
    padding-right: 10%;
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0% 5%;

    .item-contents p {
      padding-right: 5%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 15%;
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    p {
      padding-right: 0% !important;
    }
  }
`

const Emblems = styled.div`
  margin-top: 10%;
  display: flex;
  gap: 3rem;
  color: #939393;

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #ff9c2d;
    text-align: center;
    font-weight: 400;
  }

  p {
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 5%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const Mission = styled(motion.div)``

const MyCustomComponent = styled(motion.div)``

const StyledLink = styled(Link)`
  color: #ff9c2d;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.8s ease-in-out;
  width: max-content;

  &: hover {
    scale: 1.1;
  }
`

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      imgTwo: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      imgThree: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      imgFour: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const imgOne = getImage(data.imgOne)
  const imgTwo = getImage(data.imgFour)

  return (
    <InfoContainer id="about-section">
      <About>
        <div>
          <MyCustomComponent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: -20 },
            }}
          >
            <GatsbyImage image={imgOne} alt="about" />
          </MyCustomComponent>
        </div>

        <MyCustomComponent
          className="item-contents"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1, translateX: 0 },
            hidden: { opacity: 0, translateX: 20 },
          }}
        >
          <h2>About Us</h2>
          <p>
            Odyssey Driving School in Cagayan de Oro, Philippines provides
            superior, quality-oriented, and comprehensive education to road
            users. It is committed to help save lives. We base our trainings on
            research findings and, more importantly, on years of experience in
            defensive driving. At Odyssey, professional instruction goes hand in
            hand with personalized service.
          </p>
          <p>
            Odyssey Driving School is accredited by the Land Transportation
            Office (LTO). Its registration code is R10-185.
          </p>
          <p>
            In 2011, Odyssey was conferred "the most outstanding driving school”
            by the Asia-Pacific Excellence Award and the Asian Consumers Choice
            Award (CCA).
          </p>
        </MyCustomComponent>
      </About>
      <CompanyProfile>
        <MyCustomComponent
          className="item-contents"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1, translateX: 0 },
            hidden: { opacity: 0, translateX: -20 },
          }}
        >
          <h2>Company Profile</h2>

          <p>
            Founded in 2005, Odyssey Driving School’s primary objective is to
            provide the best driver education in the city. Building on its
            strong advocacy for road safety and defensive driving, all of
            Odyssey’s training programs are designed to teach driving skills for
            a lifetime of safety and enjoyment. Our programs include free
            seminars in Basic Troubleshooting and Car Maintenance and the
            Traffic Code of the Philippines. The speakers are experts and
            accredited by the Land Transportation Office (LTO).
          </p>
          <p>
            Odyssey’s founder, Eduardo Q. Almirante, Jr., has a personal reason
            behind his company’s advocacy for safe driving. He lost his only
            brother, Jose Marie, to a vehicular accident in 1999. This is why he
            makes sure that his company always has the best instructors and
            staff, and well-maintained, regularly tested vehicles for in-car
            instruction. In addition, he has gone a step further by localizing
            the YIELD project.
          </p>
          <StyledLink to="/company">
            Read More <CgArrowRight />
          </StyledLink>
        </MyCustomComponent>
        <MyCustomComponent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1, translateX: 0 },
            hidden: { opacity: 0, translateX: 30 },
          }}
        >
          <GatsbyImage image={imgTwo} alt="about" id="lastImg" />
        </MyCustomComponent>
      </CompanyProfile>
      <Emblems>
        <Mission
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 50 },
          }}
        >
          <h3>VISION</h3>
          <p>
            Odyssey Driving School’s goal is to produce a new breed of educated
            and disciplined drivers who will make the roads of the Philippine
            archipelago the safest in Southeast Asia.
          </p>
        </Mission>
        <Mission
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 50 },
          }}
        >
          <h3>MISSION</h3>
          <p>
            Odyssey Driving School's existence is dedicated to fund the JOSE
            MARIE Q. ALMIRANTE FOUNDATION. The aim of the foundation is to send
            less fortunate but deserving students desiring to become doctors to
            the Dr. Jose P. Rizal College of Medicine at Xavier
            University-Ateneo de Cagayan.
          </p>
          <p>
            Jose Marie was an upcoming second year medical student when he died
            because of a vehicular accident in 1999. He was the only brother of
            the founder, Eduardo, Jr.
          </p>
        </Mission>
        <Mission
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 50 },
          }}
        >
          <h3>AT PRESENT</h3>
          <p>
            Odyssey Driving School aims to open branches in all major cities of
            the Philippines to serve more people and help attain its vision and
            mission.
          </p>
        </Mission>
      </Emblems>
    </InfoContainer>
  )
}

export default Info
