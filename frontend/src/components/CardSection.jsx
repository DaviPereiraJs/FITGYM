import { Container, Row, Col, Card } from 'react-bootstrap'

const areas = [
  // 🔹 Primeiros 3 cards (só imagens)
  { title: '', text: '', img: '/images/maquina01.webp' },
  { title: '', text: '', img: '/images/maquina01.webp' },
  { title: '', text: '', img: '/images/maquina02.webp' },

  // 🔹 Últimos 3 cards (com informações dos planos)
  
]

export default function CardSection(){
  return (
    <Container className="py-5">
      <Row>
        {areas.map((a, i) => (
          <Col md={4} key={i} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={a.img} className="card-img-top"/>
              <Card.Body>
                {/* Renderiza título e texto só se existirem */}
                {a.title && <Card.Title className="fw-bold text-center">{a.title}</Card.Title>}
                {a.text && <Card.Text>{a.text}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
