import { Container } from './style'
import heart from '/media/heart.svg'

export const Footer = () => {
  return (
    <Container>
      Made with <img src={heart} alt="Ícone de coração" /> by <a href="https://giselleslinks.vercel.app">Giselle Ferreira</a>
    </Container>
  )
}
