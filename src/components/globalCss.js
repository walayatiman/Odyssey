import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *:before, *:after {
  box-sizing: inherit;
}
  
  body {
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    font-family: "Rubik", sans-serif;
    line-height: 1.7;
  }

  main{
    overflow:hidden;
  }

  h1, h2, h3 ,h4, h5{
    font-family: "Oswald", sans-serif;
  }

  .swiper-pagination-bullet-active {
    background: #ff9c2d !important;
  }

  .swiper-slide:before{
    background-image: linear-gradient(to bottom right,#1e1e1e,#1e1e1e);
    bottom: 0;
    content: "";
    left: 0;
    opacity: .4;
    position: absolute;
    right: 0;
    top: 0;
}
`

export default GlobalStyle
