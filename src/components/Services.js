import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

const Service = styled.div`
  p {
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
    color: #6b7280;
  }

  @media (max-width: 425px) {
    margin: 20% 0%;
  }
`

const ServiceContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 5%;
  }
`

const ServiceTitle = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: #939393;

  h2 {
    font-size: 3rem;
    margin: 15px;
    text-transform: uppercase;
    color: #ff9c2d;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 2rem;
    }
  }
`
const ServiceItemContainer = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 10%;
  position: relative;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const ServiceItems = styled(motion.div)`
  color: #939393;
  flex: 1;

  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2875b9;
    z-index: 0;
    top: -10px;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #ff9c2d;
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    z-index: 1;
    position: relative;
  }

  ul {
    padding-left: 25px;
  }

  @media (max-width: 425px) {
    &:before {
      top: auto;
      left: 43%;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }
`

const Services = () => {
  const query = useStaticQuery(graphql`
    query servicequery {
      tdc: file(relativePath: { eq: "tdc.png" }) {
        publicURL
        childImageSharp {
          fluid(quality: 10) {
            src
          }
        }
      }
      ddc: file(relativePath: { eq: "ddc.png" }) {
        publicURL
        childImageSharp {
          fluid(quality: 10) {
            src
          }
        }
      }
      pdc: file(relativePath: { eq: "pdc.png" }) {
        publicURL
        childImageSharp {
          fluid(quality: 10) {
            src
          }
        }
      }
    }
  `)
  return (
    <Service id="services-section">
      <ServiceContainer>
        <ServiceTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 20 },
          }}
        >
          <h2>ODYSSEY DRIVING COURSES</h2>
          <p>
            Odyssey Driving School offers practical driving lessons and
            theorical ones
          </p>
        </ServiceTitle>

        <ServiceItemContainer>
          <ServiceItems
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 50 },
            }}
          >
            <img src={query.tdc.childImageSharp.fluid.src} alt="" />
            <div className="icon"></div>
            <h3>Theoretical Driving Course (TDC)</h3>
            <p>
              Aspiring drivers are now required to attend 15-hour Theoretical
              Driving Course before applying for student permits.
            </p>
          </ServiceItems>

          <ServiceItems
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 50 },
            }}
          >
            <img src={query.pdc.childImageSharp.fluid.src} alt="" />
            <h3>Practical Driving Course (PDC)</h3>
            <p>
              <ul>
                <li>Manual Transmission for 2 wheels and 4 wheels</li>
                <li>Automatic Transmission for 2 wheels and 4 wheels</li>
                <li>Heavy Vehicle</li>
              </ul>
            </p>
          </ServiceItems>

          <ServiceItems
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: 50 },
            }}
          >
            <img src={query.ddc.childImageSharp.fluid.src} alt="" />
            <h3>Defensive Driving Course</h3>
            <p>Seminar on defensive driving and techniques for companies</p>
          </ServiceItems>
        </ServiceItemContainer>
      </ServiceContainer>
    </Service>
  )
}

export default Services
