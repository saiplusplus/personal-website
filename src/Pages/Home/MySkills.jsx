

import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container--box">
        <h2 className="skills--section--heading">My Expertise</h2>
        <div className="portfolio--button">
            <a href="/work-experience" className="btn btn-primary">My Work Experience</a>
            <a href="/me" className="btn btn-primary">Who I am</a>
        </div>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}