import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Experiences from "../components/Experiences"
import About from "../components/about"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import Promotion from "../components/Promotion";

const IndexPage = () => (
  <Layout>
    <SEO title="Richard Tsai" />
    <Header/>
    <About/>
    <Experiences/>
    <Promotion/>
    <Projects/>
    <Footer/>
  </Layout>
)

export default IndexPage
