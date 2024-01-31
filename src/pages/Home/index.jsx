import { Header } from '../../components/Header'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { Link, useParams } from 'react-router-dom'

import { Container, Content, Tags} from './styles'

import { FiPlus } from 'react-icons/fi'
import { useEffect} from 'react'
import { api } from '../../services/api'

export function Home(){
    // const [tags, setTags] = useState([])

    // const [notes, setNotes] = useState([])

    const params = useParams()

    // let tagsNotes;
    // for(let note in notes){
    //     console.log(note);
    //     tagsNotes = tags.filter(tag => tag.note_id == notes[note].note_id)
    //     console.log(tagsNotes);
    // }

    // let idTags;

    // for(let tags in tagsNotes){idTags = tags
    //      console.log(idTags)
    // }
    // useEffect(()=> {
    //     async function fetchTags() {
    //         const response = await api.get("/tags")
    //         const tags = response.data
    //         console.log(tags);
    //         setTags(tags)
    //     }
    //     fetchTags()
    // }, [])

    console.log(params);
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/movie_notes/${params}`)
            console.log(response);
            // setNotes(response.data)
        }
        fetchNotes()
    }, [])
   
    return(
        <Container>
            <Header/>
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
                        
                          
                        <li>
                            <Link  href="/g">
                                <h2>gfhghfg</h2>
                                <div className='stars'>
                                    <Stars bg/>
                                    <Stars bg/>
                                    <Stars bg/>
                                    <Stars bg/>
                                    <Stars/>
                                </div>

                                <div className='paragraph'>

                                    <p>
                                        fdghgfdghgfhdf
                                    </p>
                                </div>
                                
                                <Tags>                                                                                          
                                    <Tag  title="drama"/>                                                                                  
                                </Tags>
                            </Link>
                        </li>
                            
                
                        
                    </ul>
                </Content>
            </main>

        </Container>
    )
}