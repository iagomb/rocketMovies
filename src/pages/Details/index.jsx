// import { Input } from '../../components/Input'
import { useNavigate, useParams } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'


import { Container, Content } from './styles'

import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'


export function Details(){
    const [notes, setNotes] = useState()
    const {id} = useParams()

    console.log(id);
    const navigate = useNavigate()
    function handleBack() {
        navigate(-1)
    }

    async function handleDeleteMovie() {
        await api.delete('movienotes/'+ id)
        handleBack()
    }

    useEffect(()=>{
        async function fetchMovieNotes() {
            const response = await api.get('/movienotes/' + id)
            console.log(response.data)
            setNotes(response.data)
        }
        fetchMovieNotes()
    }, [])
    console.log(notes);
    // quando usamos o fragmente sem o ex: notes &&, ele interrompe a conexao com o banco de dados o notes fica undefined o exemplo abaixo mostra 2 maneiras semelhantes
    return(
        <Container>
            <Header/>
        {   notes &&
            <Content>
                <ButtonText title="Voltar" icon={FiArrowLeft} link="/"/>
            {/* {   notes && 
                <>     */}
                    <div className='title'>
                        <h1>{notes.title}</h1>
                        <div>
                            <Stars bg/>
                            <Stars bg/>
                            <Stars bg/>
                            <Stars bg/>
                            <Stars/>
                        </div>
                    </div>

                    <div className='info'>
                        <div>
                            <img src="https://github.com/iagomb.png" alt="avatar"/>
                            <span>Por Iago Moreira</span>
                        </div>
                        <div>
                            <FiClock/>
                            <span>Por Iago Moreira</span>
                        </div>
                    </div>

                    <div className="tags">
                        {
                            notes.tags.map(tag=> (                            
                                <Tag key={String(tag.id)} title={tag.name}/>
                            ))
                        }
                        
                    </div>

                    <div className='sinopse'>
                        <p>{notes.description}</p>

                    </div>
                    <div className="button">
                        <Button title="Excluir filme" onClick={handleDeleteMovie}/>
                    </div>
                {/* </> 
            }        */}
            </Content>    
        }

        </Container>
    )
}