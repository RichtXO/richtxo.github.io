import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Experiences from "../components/Experiences"
import About from "../components/about"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Richard Tsai" />
    <Header></Header>
    <About></About>
    <Experiences></Experiences>
    <Projects></Projects>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
