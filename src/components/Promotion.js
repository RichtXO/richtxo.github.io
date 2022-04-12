import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section" id="certification">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.certificationHeading}</h1>
          </Fade>
          <div className="cert-grid">
            {data.certifications.map(cert => (
                <div className="skill" key={cert.id}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <img src={cert.img} alt="css" className="skillIcons"/>
                  </a>
                  <h4>{cert.title}</h4>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
