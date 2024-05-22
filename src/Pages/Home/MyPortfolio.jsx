import React, { useState } from "react";
import data from "../../data/index.json";

const MAX_LENGTH = 300; // Maximum length before truncation

const PortfolioCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    
    const truncatedText = item.description.slice(0, MAX_LENGTH);
    const shouldTruncate = item.description.length > MAX_LENGTH;

    return (
        <div className="portfolio--section--card">
            <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
                <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className={`text-md ${shouldTruncate && !isExpanded ? "truncated" : ""}`}>
                        {shouldTruncate && !isExpanded ? truncatedText + "..." : item.description}
                    </p>
                    {shouldTruncate && (
                        <span className="read-more" onClick={handleToggle}>
                            {isExpanded ? "Read less" : "Read more"}
                        </span>
                    )}
                </div>
                <p className="text-sm portfolio--link">
                    <a className="project--link" href={item.url} target="_blank">{item.link}</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                        <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub-title">Recent Projects</p>
                    <h2 className="skills--section--heading">My Portfolio</h2>
                </div>
                <div className="portfolio--button">
                    <a href="/projects" className="btn btn-primary">
                        View all Projects
                    </a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <PortfolioCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
}
