import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import resume from "../Richard_Tsai_Resume.pdf"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Richard Tsai.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#experiences")}>Exerpeinces</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <a href={resume}>
              <button>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
