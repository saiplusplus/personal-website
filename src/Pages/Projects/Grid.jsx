import React, { useState } from 'react';
import data from "../../data/index.json";

export default function Grid() {
    return (
        <section className="project--section" id="MyPortfolio">
            <div className="project--section--container">
                {data?.projects?.map((item, index) => (
                    <div key={index} className="project--section--card">
                        <div className="project--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <ExpandableText text={item.description} />
                            </div>
                            <p className="test-sm portfolio--link">
                            <a className="project--link" href={item.url} target="_blank">{item.link}</a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        strokeWidth="2.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const ExpandableText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => setIsExpanded(!isExpanded);

    return (
        <div className="expandable-text">
            <p className={isExpanded ? "text-md expanded" : "text-md"}>
                {isExpanded ? text : `${text.slice(0, 270)}...`}
            </p>
            <a className="read-more" onClick={toggleExpansion}>
                {isExpanded ? "Read Less" : "Read More"}
            </a>
        </div>
    );
};
