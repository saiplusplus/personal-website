import React, { useState } from 'react';
import data from "../../data/index.json";

export default function TA() {
    return (
        <section>
            <div className="experience--container">
                <div className="experience--section--container">
                    {data?.work?.map((item, index) => (
                        <div key={index} className="work--section--card">
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <h4 className="job--title">{item.job}</h4>
                                <h4 className="job--title">{item.years}</h4>
                                <ExpandableText text={item.description} />
                            </div>
                            <div className="work--image--container">
                                <img src={item.src} alt="Product Chain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const ExpandableText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => setIsExpanded(!isExpanded);

    return (
        <div className="expandable-text">
            <p className={isExpanded ? "text-md expanded" : "text-md"}>
                {isExpanded ? text : `${text.slice(0, 1000)}...`}
            </p>
            <a className="read-more" onClick={toggleExpansion}>
                {isExpanded ? "Read Less" : "Read More"}
            </a>
        </div>
    );
};
