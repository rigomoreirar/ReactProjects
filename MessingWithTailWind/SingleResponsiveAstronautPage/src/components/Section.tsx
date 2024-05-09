import React from "react";

type SectionProps = {
    text: string;
};

const Section: React.FC<SectionProps> = ({ text }) => {
    return (
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            {text}
        </section>
    );
};

export default Section;
