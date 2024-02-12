import { Tag } from '../Tag'
import { Stars } from '../Stars'

import { Container, Tags } from './style'

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>      
            <div>
                <h2>{data.title}</h2>
                <div className='stars'>
                    <Stars bg/>
                    <Stars bg/>
                    <Stars bg/>
                    <Stars bg/>
                    <Stars/>
                </div>

                <div className='paragraph'>

                    <p>
                        {data.description}
                    </p>
                </div>
                
                <Tags>                                                    
                    {
                        data.tags && data.tags.map(tag => (
                            <Tag key={String(tag.id)}  title={tag.name}/>                  
                        ))
                    }                 
                </Tags>
            </div>         
        </Container>
    )
}