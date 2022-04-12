import React from "react"
import GlobalCss from "../components/globalCss"
import Seo from "../components/seo"

import Menu from "../components/Menu"
import Services from "../components/Services"
import SliderSection from "../components/SliderSection"
import Info from "../components/Info"
import Footer from "../components/Footer"
import Branches from "../components/Branches"
import Map from "../components/Map"

//https://www.edufront.co.in/product

export default function Home({ data }) {
  return (
    <main>
      <Seo title="Home" />
      <GlobalCss />
      <Menu />
      <SliderSection />
      <Services />
      <Info />
      <Branches />
      <Map />
      <Footer />
    </main>
  )
}
