import { FaLink } from 'react-icons/fa'
import { Container } from './style'
import profilePicture from '/media/profile-picture.png'

export const Header = () => {
  return (
    <Container>
      <section> 
        <h1>Meus <FaLink size={20} fill='#c0c0c0' /> Links</h1>
        <h2>Dra. Rosana Poggio</h2>
      </section>
      
      <img src={profilePicture} alt="Foto de perfil da profissional" width="60" />
      <span></span>
    </Container>
  )
}
