import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

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
            <button onClick={() => scrollTo("#experiences")}>Experiences</button>
            <button onClick={() => scrollTo("#certification")}>Certification</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
