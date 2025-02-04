function Button({ text, onClick, className = "btn-primary" }) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
