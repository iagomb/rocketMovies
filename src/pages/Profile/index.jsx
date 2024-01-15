import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
// import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Avatar } from './styles'

import { FiUser, FiLock, FiMail, FiCamera, FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/> Voltar</Link>
            </header>
            <main>

                <Avatar>
                    <img src="https://github.com/iagomb.png" alt="avatar" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id='avatara'/>
                    </label>
                </Avatar>
                {/* <ButtonText title="Criar conta" href="/register"/> */}
                <Form>   
                    <Input placeholder="Nome" icon={FiUser}/>
                    <Input placeholder="E-mail" icon={FiMail}/>
                    <Input placeholder="Senha atual" icon={FiLock}/>
                    <Input placeholder="Nova senha" icon={FiLock}/>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}