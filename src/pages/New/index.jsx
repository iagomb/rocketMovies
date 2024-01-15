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

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <ButtonText title="Voltar" icon={FiArrowLeft} link="/"/>

                    <div className='title'>
                        <h1>Interestelar</h1>
                    </div>
                    <Inputs className='inputs'>
                        <div>
                            <Input type="text" placeholder="Titulo"/>
                            <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
                        </div>
                        <TextArea placeholder="Observações"/>
                    </Inputs>

                    <Tags>
                        <h3>Marcadores</h3>

                        <div>
                            <NoteItem value="Ficção"/>   
                            <NoteItem placeholder="Novo Marcador" isNew/>   
                        </div>
                    </Tags>
                    <footer>
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </footer>
                </Form>
            </main>

        </Container>
    )
}