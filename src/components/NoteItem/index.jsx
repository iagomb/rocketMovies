import { Container} from './styles'

import { FiPlus, FiX } from "react-icons/fi"

export function NoteItem({ isNew,onClick, value,...rest}){
    return(
        <Container isNew={isNew}>
            <input type="text" {...rest} readOnly={!isNew} value={value}/>

            <button
                type='button'
                onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}