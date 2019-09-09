import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// TODO: Where do create.js and zim.js need to be imported/exported?
// I tried in zimcontainer.js, page-2.js, gatsby-brwoser.js - no success so far...

// import "../../node_modules/@danzen/createjs/create"
// import "../../node_modules/zimjs/zim"

//import Zimcontainer from "../components/zimcontainer"

const SecondPage = () => (
  <Layout>
    <h3>Component zimcontainer to come here:</h3>

    {/* <Zimcontainer></Zimcontainer> */}

    <Link to="/">Back to home</Link>
  </Layout>
)

export default SecondPage
