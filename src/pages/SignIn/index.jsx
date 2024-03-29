import { useState } from 'react'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { FiMail, FiLock } from 'react-icons/fi'
import { Background, Container, Form } from './styles'

import { useAuth } from '../../hooks/auth'
// import { api } from '../../services/api'

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn}  = useAuth()

    async function handleSignIn() {
        if (!email || !password) {
            alert("Preencha todos os campos")
        }

        

        signIn({ email, password })
        
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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

                <Button type="button" title="Entrar" onClick={handleSignIn}/>

                <ButtonText type="button"  title="Criar conta" link="/register" />
            </Form>
            <Background/>
        </Container>
    )
}

