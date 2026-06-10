function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;