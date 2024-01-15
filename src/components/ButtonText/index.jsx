// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container} from './styles'

export function ButtonText({icon: Icon, title, link}){
    return(
        <Container>
            <Link to={link}>
                {Icon && <Icon/>}
                {title}
            </Link>
        </Container>
    )
}