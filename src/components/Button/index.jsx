import { Container} from './styles'

export function Button({icon: Icon,title, loading=false, ...rest}){
    return(
        <Container 
            {...rest}
            disabled={loading}
        >
            {Icon && <Icon/>}
            {loading ? "Carregando..." : title}
        </Container>
    )
}