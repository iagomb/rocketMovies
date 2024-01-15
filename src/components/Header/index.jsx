import { Container, Content, Avatar} from './styles'
import logo from '../../assets/logo.svg'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logo} alt="" />

                <input type="text" placeholder="Pesquisar pelo título"/>

                <Avatar>
                    <div>
                        <strong>Iago Moreira</strong>
                        <a href='#'>Sair</a>
                    </div>
                    <img src="https://github.com/iagomb.png" alt="" />
                </Avatar>
            </Content>
        </Container>
    )
}