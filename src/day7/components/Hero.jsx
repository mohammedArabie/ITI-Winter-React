import Button from './Button';

function Hero({ title, text, image, reverse, buttonText }) {
    return (
        <div className="container py-5">
            <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="col-md-6">
                    <h2 className="display-4 mb-3">{title}</h2>
                    <p className="lead mb-4">{text}</p>
                    <Button text={buttonText} />
                </div>
                <div className="col-md-6">
                    <img src={image} alt={title} className="img-fluid rounded shadow " />
                </div>
            </div>
        </div>
    );
};

export default Hero;
