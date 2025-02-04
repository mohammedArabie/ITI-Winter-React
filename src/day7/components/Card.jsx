import Button from './Button';

function Card({ image, title, text, buttonText }) {
    return (
        <div className="card h-100 shadow">
            <figure className="m-0">
                <img src={image} alt={title} className="card-img-top" style={{ height: "150px", width: "100%" }} />
            </figure>
            <div className="card-body">
                <h3 className="card-title h5">{title}</h3>
                <p className="card-text">{text}</p>
                <Button text={buttonText} className="btn-outline-primary" />
            </div>
        </div>
    );
};

export default Card;
