import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import resume from "../Richard_Tsai_Resume.pdf"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br/>
              <br/>
              {data.aboutParaTwo}
              <br/>
              <br/>
              {data.aboutParaThree}
              <br/>
              <br/>
              <a href={resume} className="primary-btn">
                Resume
              </a>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
