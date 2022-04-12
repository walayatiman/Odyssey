import React from "react"
import GlobalStyle from "../components/globalCss"
import Menu from "../components/Menu"
import Seo from "../components/seo"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const Section = styled.section`
  padding: 0 5%;
`

const CompanyBody = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #ff9c2d;
    text-align: center;
    font-weight: 400;
  }

  p {
    color: #fff;
    column-count: 2;
    font-size: clamp(0.8125rem, 0.775rem + 0.1875vw, 1rem);
  }
`
const BackgroundContent = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 72px;
    line-height: 1.2em;
    font-weight: normal;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
  }

  span {
    font-family: "Playfair Display", serif;
    color: #ff9c2d;
    font-size: 20px;
  }

  @media (max-width: 769px) {
    height: 50vh;

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 425px) {
    height: 40vh;

    h2 {
      font-size: 1.5rem;
    }
  }
`

const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0, 50% 0);
  &:before {
    background-image: linear-gradient(to bottom right, #1e1e1e, #1e1e1e);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.6;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Company = () => {
  const imgData = useStaticQuery(graphql`
    query {
      imgOne: file(relativePath: { eq: "gingoog.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const imgOne = getImage(imgData.imgOne)
  const slideone = convertToBgImage(imgOne)

  return (
    <main>
      <Seo title="Company Profile" />
      <GlobalStyle />
      <Menu />
      <HeaderContainer>
        <BackgroundImage
          Tag="section"
          {...slideone}
          preserveStackingContext
          className={`titleImg`}
        >
          <BackgroundContent>
            <span>Since 2005</span>
            <h2>Company Profile</h2>
          </BackgroundContent>
        </BackgroundImage>
      </HeaderContainer>
      <Section>
        <CompanyBody>
          <p>
            Founded in 2005, Odyssey Driving School’s primary objective is to
            provide the best driver education in the city. Building on its
            strong advocacy for road safety and defensive driving, all of
            Odyssey’s training programs are designed to teach driving skills for
            a lifetime of safety and enjoyment. Our programs include free
            seminars in Basic Troubleshooting and Car Maintenance and the
            Traffic Code of the Philippines. The speakers are experts and
            accredited by the Land Transportation Office (LTO). <br></br>
            <br></br>
            Odyssey’s founder, Eduardo Q. Almirante, Jr., has a personal reason
            behind his company’s advocacy for safe driving. He lost his only
            brother, Jose Marie, to a vehicular accident in 1999. This is why he
            makes sure that his company always has the best instructors and
            staff, and well-maintained, regularly tested vehicles for in-car
            instruction. In addition, he has gone a step further by localizing
            the YIELD project. <br></br>
            <br></br>Along with the founder and his office staff, Odyssey has
            two highly-skilled practical driving instructors who specialize in
            teaching defensive driving, and two theoretical classroom professors
            and technical consultants in the field of automotive mechanics.
            <br></br>
            <br></br>The company started in 2005 with two training cars, but has
            recently added a third one to meet the demand of its growing
            clientele not only from Cagayan de Oro but from far-flung
            municipalities and towns in Misamis Oriental. <br></br>
            <br></br>In December 2008, Odyssey Driving School was incorporated
            under the laws of the Philippines. It is currently managed and
            operated by East Quest Automobile Corporation. <br></br>
            <br></br>Odyssey Driving School is accredited by the Land
            Transportation Office (LTO) with registration number R10-185 and is
            located at Almirante Building, Velez-Luna Streets, Cagayan de Oro
            City. It has recently opened a registration center at the FABE
            Business Center in Robinson's Mall in Lim Ket Kai.
          </p>
        </CompanyBody>
      </Section>
      <GatsbyImage image={imgOne} alt="about" />
      <Footer />
    </main>
  )
}

export default Company
