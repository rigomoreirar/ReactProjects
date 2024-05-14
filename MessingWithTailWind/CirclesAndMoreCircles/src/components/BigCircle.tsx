type BigCircleProps = {
    children: React.ReactNode;
};

const BigCircle: React.FC<BigCircleProps> = ({ children }) => {
    return (
        <div className="bg-emerald-500 w-60 h-60 grid rounded-full shadow-2xl place-items-center">
            {children}
        </div>
    );
};

export default BigCircle;
