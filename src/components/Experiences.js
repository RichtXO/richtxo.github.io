import React from "react"
import data from "../yourdata"

const Experiences = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Experiences</h1>
          <div className="skills-grid">
            {data.experiences.map(experience => (
              <div className="skill" key={experience.id}>
                <img src={experience.img} alt="css" className="skillIcons"></img>
                <h4>{experience.title}</h4>
                <h5>{experience.date}</h5>
                <p>{experience.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
