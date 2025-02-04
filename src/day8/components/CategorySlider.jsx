import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CategorySlider() {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

    return (
        <Container className="my-5 position-relative">
            <Row className="align-items-center">
                <Col md={10}>
                    <div className="d-flex overflow-hidden">
                        {categories.map((category, index) => (
                            <div key={index} className="px-3">
                                <Button variant="outline-dark" className="rounded-pill px-4 py-2">
                                    {category}
                                </Button>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={2} className="d-flex justify-content-end">
                    <Button variant="light" className="me-2"><FaChevronLeft /></Button>
                    <Button variant="light"><FaChevronRight /></Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CategorySlider;
