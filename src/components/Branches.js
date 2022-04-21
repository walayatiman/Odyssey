import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Branch = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 5% 0;

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #ff9c2d;
    text-align: center;
    font-weight: 400;
    margin: 0 auto 5% auto;
    flex-direction: column;
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

const Branched = styled(motion.div)`
  flex: 0 0 30.5%;
  background-color: #2875b9;
  padding: 30px;

  strong {
    color: #ff9c2d;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #d1d5db;
  }

  @media (max-width: 1024px) {
    flex: 0 0 29%;
  }

  @media (max-width: 768px) {
    flex: 0 0 45%;
  }

  @media (max-width: 425px) {
    flex: 0 0 100%;
  }
`

const BranchContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`

const Title = styled.div`
  margin-bottom: 5%;
  min-height: 85px;

  h3 {
    font-size: 20px;
    text-transform: uppercase;
    color: #ff9c2d;
    text-align: center;
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
  }
`

const Header = styled(motion.div)``

const Branches = () => {
  return (
    <Branch>
      <Header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: -20 },
        }}
      >
        <h2>Branches</h2>
      </Header>
      <BranchContainer>
        <Branched
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Title>
            <h3>Odyssey Driving School</h3>
            <h3>(In front of Land Transporation Office)</h3>
          </Title>
          <p>3rd Floor, SM City</p>
          <p>
            Mastersons Avenue, <strong>Cagayan de Oro City</strong>
          </p>
          <p>(088) 859-3019</p>
        </Branched>
        <Branched
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.25 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Title>
            <h3>Odyssey Driving School </h3>
            <h3>(Near entrance of SM Supermarket)</h3>
          </Title>
          <p>SM CDO Downtown Premier</p>
          <p>
            C.M. Recto Avenue, <strong>Cagayan de Oro City</strong>
          </p>
        </Branched>
        <Branched
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Title>
            <h3>Odyssey Driving School</h3>
            <h3>(In front of Land Transportation Office)</h3>
          </Title>
          <p>Door 3, Ground Floor, JGG Building, Zone 3</p>
          <p>
            Barangay Agusan, <strong>Cagayan de Oro City</strong>
          </p>
        </Branched>
        <Branched
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Title>
            <h3>Odyssey Driving School</h3>
            <h3>(Near Land Transportation Office; beside FICCO)</h3>
          </Title>
          <p>Market site, RRN Building</p>
          <p>
            Barangay 9, <strong>Malaybalay City, Bukidnon</strong>
          </p>
          <p>malaybalay@odysseydriving.com </p>
        </Branched>
        <Branched
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Title>
            <h3>Odyssey Driving School</h3>
          </Title>
          <p>6F, Unit 6J Makati Executive Tower</p>

          <p>Cityland, De la Rosa Street</p>
          <p>
            Legaspi Village,<strong>Malaybalay City, Bukidnon</strong>
          </p>
        </Branched>
      </BranchContainer>
    </Branch>
  )
}

export default Branches
