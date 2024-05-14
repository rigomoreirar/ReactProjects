import React from "react";

type SmallCircleProps = {
    children: React.ReactNode;
};
const SmallCircle: React.FC<SmallCircleProps> = ({ children }) => {
    return (
        <div className="bg-white rounded-full grid place-items-center w-40 h-40 shadow-2xl">
            {children}
        </div>
    );
};

export default SmallCircle;
