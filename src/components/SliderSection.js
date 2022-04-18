import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/bundle"
import "swiper/css"
import "swiper/css/effect-fade"
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper"

import styled from "styled-components"

const SliderContainer = styled.div`
  margin-top: 0;
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  height: 90vh;
  color: #fff;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 72px;
    line-height: 1.2em;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    color: #fff;
    font-size: clamp(18px,0.775rem + 0.1875vw,1rem);
    line-height: 1.6em;
  }

  @media (max-width: 1440px) {
    padding: 0 5%;
    height: 80vh;
    margin-top: 6%;

    h2{
      font-size:2.5rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 5%;
    height: 80vh;
    margin-top: 8%;

    h2{
      font-size:2.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 5%;
    height: 60vh;
    margin-top: 8%;

    h2{
      font-size:2rem;
    }
  }

  @media (max-width: 425px) {
    padding: 0 5%;
    height: 40vh;
    margin-top: 16%;

    h2{
      font-size:1.5rem;
    }

    p{
      font-size:11px;
    }
  }

  

  

  
  }
`

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade])

const SliderSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sliderOne: file(relativePath: { eq: "7.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        sliderTwo: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        placeholderImage: file(relativePath: { eq: "3.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )

  // // Set ImageData.
  // const sliderOne = data.sliderOne.childImageSharp.fluid
  // const sliderTwo = data.sliderTwo.childImageSharp.fluid

  const image = getImage(data.placeholderImage)
  const bgImage = convertToBgImage(image)

  const slide = getImage(data.sliderOne)
  const slideone = convertToBgImage(slide)

  const sliden = getImage(data.sliderTwo)
  const slidetwo = convertToBgImage(sliden)

  return (
    <SliderContainer id="home-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <BackgroundImage
            Tag="section"
            {...slideone}
            preserveStackingContext
            className={`bgImage`}
          >
            <Contents>
              <h2 className="swiper-title">
                Odyssey Driving School in Cagayan de Oro, Philippines
              </h2>
              <p className="swiper-subtitle">
                Provides superior, quality-oriented, and comprehensive education
                to road users.
              </p>
            </Contents>
          </BackgroundImage>
        </SwiperSlide>
        <SwiperSlide>
          <BackgroundImage
            Tag="section"
            {...slidetwo}
            preserveStackingContext
            className={`bgImage`}
          >
            <Contents>
              <h2 className="swiper-title">
                It is committed to help save lives
              </h2>
              <p className="swiper-subtitle">
                We base our trainings on research findings and, more
                importantly, on years of experience in defensive driving
              </p>
            </Contents>
          </BackgroundImage>
        </SwiperSlide>
        <SwiperSlide>
          <BackgroundImage
            Tag="section"
            {...bgImage}
            preserveStackingContext
            className={`bgImage`}
          >
            <Contents>
              <h2 className="swiper-title">
                professional instruction goes hand in hand with personalized
                service.
              </h2>
              <p className="swiper-subtitle">
                Odyssey Driving School is accredited by the Land Transportation
                Office (LTO). Its registration code is R10-185.
              </p>
            </Contents>
          </BackgroundImage>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}

export default SliderSection
