import React, { useEffect, useState } from "react"
import styled from "styled-components"

const MapContainer = styled.div`
  background-color: #333333;
`

const Map = () => {
  // const [data, setData] = useState([])
  // const getData = () => {
  //   fetch("https://www.boredapi.com/api/activity")
  //     // We get the API response and receive data in JSON format
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setData({
  //         content: data,
  //       })
  //     })
  //     .catch(error => console.error(error))
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.917177327837!2d124.64695884236407!3d8.484271359293764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2dc02281ff3%3A0xa4820833789239b4!2sOdyssey%20Driving%20School!5e0!3m2!1sen!2sca!4v1648209738933!5m2!1sen!2sca"
        width="100%"
        height="600"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      {/* <h1>{this.state.content.activity}</h1> */}
    </MapContainer>
  )
}

export default Map
