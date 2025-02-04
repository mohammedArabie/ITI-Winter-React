import Button from './Button';

function Section2({ title, text, buttonText }) {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="container text-center">
                <h2 className="display-4 mb-3">{title}</h2>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>{text}</p>
                <Button text={buttonText} className="btn-success" />
            </div>
        </div>
    );
};

export default Section2;
