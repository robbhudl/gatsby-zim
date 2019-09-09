import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// import "../../node_modules/@danzen/createjs/create"
// import "../../node_modules/zimjs/zim"

import Zimcontainer from "../components/zimcontainer"

const SecondPage = () => (
  <Layout>
    <h3>ZIM to come here:</h3>

    <Zimcontainer></Zimcontainer>
    
    <Link to="/">Back to home</Link>
  </Layout>
)

export default SecondPage
