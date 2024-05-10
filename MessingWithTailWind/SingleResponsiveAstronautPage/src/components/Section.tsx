import React from "react";

type SectionProps = {
    children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            {children}
        </section>
    );
};

export default Section;
