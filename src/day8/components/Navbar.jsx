import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaHeart } from 'react-icons/fa';

function NavigationBar() {
    return (
        <Navbar bg="white" expand="lg" className="border-bottom">
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-4">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#shop" className="mx-3">Shop</Nav.Link>
                        <Nav.Link href="#products" className="mx-3">Products</Nav.Link>
                        <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <FaSearch className="mx-3" size={20} />
                        <FaHeart className="mx-3" size={20} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
