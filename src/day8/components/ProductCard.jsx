import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

function ProductCard({ image, name, price }) {
    const [count, setCount] = useState(0);

    return (
        <Card className="border-0 shadow-sm mb-4">
            <Card.Img variant="top" src={image} height={"300px"}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="fw-bold text-primary">${price}</Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                    <Button variant="outline-secondary" size="sm"
                        onClick={() => setCount(prev => Math.max(0, prev - 1))}>-</Button>
                    <span className="mx-3">{count}</span>
                    <Button variant="outline-secondary" size="sm"
                        onClick={() => setCount(prev => prev + 1)}>+</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
