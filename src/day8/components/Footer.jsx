/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>About Us</h5>
                        <p>Your trusted shopping destination</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">Shop</a></li>
                            <li><a href="#" className="text-white">Products</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>Email: contact@example.com</li>
                            <li>Phone: (123) 456-7890</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        <div className="social-links">
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
