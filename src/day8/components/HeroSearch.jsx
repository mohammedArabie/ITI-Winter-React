import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import './HeroSearch.css';

function HeroSearch() {
    return (
        <Container className="py-5 ms-5 bg-pink rounded-5">
            <Row className="align-items-center">
                <Col md={6} className="text-center ">
                    <h1 className="display-4 fw-bold mb-4">Find Your Perfect Product</h1>
                    <InputGroup className="mb-3 w-75">
                        <Form.Control
                            placeholder="⌕ Search products..."
                            className="py-3 rounded-pill ps-5 search-input"
                        />
                        
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <img src="https://picsum.photos/200/300?random=50" alt="Hero" className=" w-75" height={"300px"} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSearch;
