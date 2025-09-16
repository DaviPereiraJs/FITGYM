import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <div className="hero">
      <Container>
        <h1 className="display-4 fw-bold" style={{textAlign:"center"}}>FITGYM</h1>
        <p className="lead">A FITGYM nasceu com o propósito de transformar vidas por meio da saúde, do bem-estar e da prática de atividades físicas. Acreditamos que cada pessoa tem um potencial único e, com o acompanhamento certo, é possível alcançar resultados incríveis..</p>
        <Button as={Link} to="/PagePlanos" variant="light" size="lg">Planos</Button>
        <Button as={Link} to="/Matricula" variant="light" size="lg">Matriculas</Button>
      </Container>
    </div>
  )
}
