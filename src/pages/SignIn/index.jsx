import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
// import { FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" icon={FiMail}/>
                <Input placeholder="Senha" icon={FiLock}/>

                <Button title="Entrar"/>

                <ButtonText title="Criar conta" link="/register"/>
            </Form>
            <Background/>
        </Container>
    )
}