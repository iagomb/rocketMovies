import { useState } from 'react'

import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import avatarPlaceholder from '../../assets/avatar.svg'
import { Container, Form, Avatar } from './styles'
import { FiUser, FiLock, FiMail, FiCamera, FiArrowLeft} from 'react-icons/fi'

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    
    const avatarUrl = user.url_image ? `${api.defaults.baseURL}/files/${user.url_image}` :  avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)
    
    function handleUpdate() {
        const updated ={
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdate = Object.assign(user, updated)
        
        console.log(userUpdate);
        updateProfile({user: userUpdate, avatarFile})
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/> Voltar</Link>
            </header>
            <main>

                <Avatar>
                    <img src={avatar} alt={user.name} />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id='avatar' onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Form>   
                    <Input type="text" placeholder="Nome" icon={FiUser} onChange={e=> setName(e.target.value)} value={name}/>
                    <Input type="email" placeholder="E-mail" icon={FiMail} onChange={e=> setEmail(e.target.value)} value={email}/>
                    <Input type="password" placeholder="Senha atual" icon={FiLock} onChange={e=> setOldPassword(e.target.value)}/>
                    <Input type="password" placeholder="Nova senha" icon={FiLock} onChange={e=> setNewPassword(e.target.value)}/>

                    <Button type="button" title="Salvar" onClick={handleUpdate}/>
                </Form>
            </main>
        </Container>
    )
}