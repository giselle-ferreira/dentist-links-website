import { Container, LinkBox } from "./style"
import data from '../../data/links.json'

export const LinksContainer = () => {
  return (
      <Container>
      {data.map((element) => {
          return(
              <LinkBox
                href={element.link}
                target="_blank"
                key={element.link}
                >
                <img
                src={element.img}
                alt={`Ícone do ${element.social}`}
                title={`Clique para ir para o ${element.social}`}
                />
                <span>{element.description}</span>
              </LinkBox>        
          )
      })}
      </Container>
  )
}
