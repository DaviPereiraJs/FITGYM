import { Container, Row, Col } from 'react-bootstrap';

export default function AboutSection() {
  return (
    <Container className="about-section">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-4">Sobre a FITGYM</h2>
          <p>
            Nosso espaço foi pensado para oferecer conforto, motivação e a melhor experiência em treinos, seja para quem está começando agora ou para quem já tem experiência no mundo fitness.
          </p>
          <p>
            Nossos Planos
            Na FITGYM, entendemos que cada aluno tem necessidades diferentes. Por isso, oferecemos planos flexíveis e acessíveis:
            Plano Básico – Ideal para quem está começando, com acesso livre aos equipamentos e acompanhamento inicial.
            Plano Plus – Além de toda a estrutura da academia, inclui aulas coletivas e acompanhamento mais próximo.
            Plano Premium – Para quem busca performance e resultados rápidos, com treinos personalizados, consultoria nutricional e suporte completo.
          </p>
          <p>
            Por que escolher a FITGYM?
            Estrutura moderna e confortável, com equipamentos de última geração.
            Profissionais qualificados, sempre prontos para orientar e motivar.
            Ambiente acolhedor, que valoriza cada conquista individual.
            Variedade de treinos e modalidades, que tornam a rotina mais dinâmica.
            Planos acessíveis e flexíveis, para se adaptar ao seu estilo de vida.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
