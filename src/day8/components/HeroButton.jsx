import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroButton() {
    return (
        <Container className="py-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <h1 className="display-4 fw-bold mb-4">Special Offer</h1>
                    <p className="lead mb-4">Don't miss out on our amazing deals!</p>
                    <Button variant="dark" size="lg">Shop Now</Button>
                </Col>
                <Col md={6}>
                    <img src="https://picsum.photos/200/300?random=51" alt="Hero" className="w-100" height={"300px"} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroButton;
