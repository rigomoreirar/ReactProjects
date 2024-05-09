import React from "react";

type HeaderProps = {
    children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="bg-teal-700 text-white sticky top-0 z-10">
            {children}
        </header>
    );
};

export default Header;
