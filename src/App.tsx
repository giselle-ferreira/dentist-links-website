import { Description } from "./Components/Description/Description"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { LinksContainer } from "./Components/LinksContainer/LinksContainer"
import styled from 'styled-components'

function App() {

  return (
    <Container>
      <Header />
      <Description />
      <LinksContainer />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
`

export default App
