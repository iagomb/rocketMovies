import { useState } from 'react'
// import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { TextArea } from '../../components/TextArea'
// import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Inputs, Tags } from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export function New(){
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [sinopse, setSinopse] = useState("")

    const [tags, setTags] = useState([])
    const [newTags, setNewTags] = useState("")

    const params = useParams()
    console.log(params);
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleAddTags() {
        if (!newTags) {
           return alert("preencha os campos")
        }

        setTags(prevState => [...prevState, newTags])
        
        setNewTags("")
    }

    const navigate = useNavigate()
    async function handleNewMovies() {
        if (!title || !note || !sinopse) {
            return alert("Preencha todos os campos")
        }

        if (newTags) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar")
        }  

        await api.post("/movie_notes", {
            title,
            rating: note,
            description: sinopse,
            tags
        })

        alert("Nota cadastrada com sucesso")

        navigate(-1)
    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <ButtonText title="Voltar" icon={FiArrowLeft} link="/"/>

                    <div className='title'>
                        <h1>Novo filme</h1>
                    </div>
                    <Inputs className='inputs'>
                        <div>
                            <Input type="text" placeholder="Titulo" onChange={e=> setTitle(e.target.value)}/>
                            <Input type="text" placeholder="Sua nota (de 0 a 5)" onChange={e=> setNote(e.target.value)}/>
                        </div>
                        <TextArea placeholder="Sinopse" onChange={e=> setSinopse(e.target.value)}/>
                    </Inputs>

                    <Tags>
                        <h3>Marcadores</h3>

                        <div>
                            {
                                tags && tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)} 
                                        value={tag}
                                        onClick={()=> handleRemoveTag(tag)}
                                    />     
                                ))
                            }
                            <NoteItem 
                                placeholder="Novo Marcador" 
                                isNew 
                                onChange={e=> setNewTags(e.target.value)}
                                onClick={handleAddTags}
                            />   
                        </div>
                    </Tags>
                    <footer>
                        <Button type="button" title="Excluir filme"/>
                        <Button type="button" title="Salvar alterações" onClick={handleNewMovies}/>
                    </footer>
                </Form>
            </main>

        </Container>
    )
}