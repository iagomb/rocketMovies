import { Header } from '../../components/Header'


import { Link, useNavigate } from 'react-router-dom'


import { Container, Content} from './styles'

import { FiPlus } from 'react-icons/fi'
import { useEffect, useState} from 'react'
import { api } from '../../services/api'
import { Note } from '../../components/Note'

export function Home(){
    // const [tags, setTags] = useState([])

    const [notes, setNotes] = useState()
    const [search, setSearch] = useState("")

    const navigate = useNavigate()
    
    
    function handleDetails(id) {
        navigate("/details/" + id)
    }
   
    useEffect(()=> {
        async function fetchNotes(){
            const response = await api.get(`/movienotes?title=${search}`)
            
            setNotes(response.data)
        }
        fetchNotes()
    }, [search])

    return(
        <Container>
            <Header onChange={e => setSearch(e.target.value)}/>
            <main>
                <div className="header">
                    <h1>Meus filmes</h1>

                    <Link to="/new">
                        <FiPlus/>
                        Adicionar filme
                    </Link>
                </div>
                <Content>
                    <ul>
                        
                        {  notes && notes.map(note =>(
                            <Note key={note.id} data={note} onClick={() => handleDetails(note.id)}/>
                        ))
                            
                        }     
                    </ul>
                </Content>
            </main>

        </Container>
    )
}