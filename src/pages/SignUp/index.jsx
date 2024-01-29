import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Background } from './styles'

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

export function SignUp(){
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !setName || !avatar || !password) {
            return alert('Preencha todos os campos')
        }
    
        api.post('/users', {name, avatar, email, password})
            .then(() => {
                alert('Cadastrado com sucesso')
                // navigate('/')
                console.log('oi');
            })
            .catch((error)=> {
                if (error.response) {
                    alert(error.response.data.message)
                }else{
                    alert('Não foi possivel cadastrar')
                }
            })

        navigate('/')
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome" 
                    icon={FiUser}
                    onChange={e=> setName(e.target.value)}
                />
                <Input 
                    placeholder="Avatar" 
                    icon={FiUser}
                    onChange={e=> setAvatar(e.target.value)}
                />
                <Input 
                    placeholder="E-mail" 
                    icon={FiMail}
                    onChange={e=> setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha" 
                    icon={FiLock}
                    onChange={e=> setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <ButtonText title="Voltar para o login" icon={FiArrowLeft} link="/"/>
            </Form>
            <Background/>
        </Container>
    )
}