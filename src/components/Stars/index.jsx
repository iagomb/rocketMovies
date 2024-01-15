import { Container} from './styles'
import { IoStar, IoStarOutline } from 'react-icons/io5'
export function Stars({bg}){
    return(
        <Container>
            {bg ? <IoStar/> : <IoStarOutline/>}
        </Container>
    )
}