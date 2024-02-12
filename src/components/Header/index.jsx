import { Container, Content, Avatar} from './styles'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar.svg'

export function Header({...rest}){

    const { signOut, user } = useAuth()

    const navigate = useNavigate()

    const avatarUrl = user.url_image ? `${api.defaults.baseURL}/files/${user.url_image}`: avatarPlaceholder;

    function handleProfile() {
        navigate("/profile")
    }
    
    function handleSignOut() {
        navigate("/")
        signOut()
    }
    return(
        <Container>
            <Content>
                <img src={logo} alt={user.name} />

                <input type="text" placeholder="Pesquisar pelo título" {...rest}/>

                <Avatar onClick={handleProfile}>
                    <div>
                        <strong>{user.avatar}</strong>
                        <button type='button' onClick={handleSignOut}>Sair</button>
                    </div>
                    <img src={avatarUrl} alt={user.name} />
                </Avatar>
            </Content>
        </Container>
    )
}