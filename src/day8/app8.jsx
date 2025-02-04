import NavigationBar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import CategorySlider from './components/CategorySlider';
import ProductCard from './components/ProductCard';
import HeroButton from './components/HeroButton';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

export default function App8() {
    return <>
        <NavigationBar />
        <HeroSearch />
        <CategorySlider />
        <Container>
            <Row>
                {[1, 2, 3, 4].map(item => (
                    <Col md={3} key={item}>
                        <ProductCard 
                            image={`https://picsum.photos/200/300?random=${item}`}
                            name={`Product ${item}`}
                            price={99.99}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
        <HeroButton />
        <Footer />
    </>;
}