import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Blog} from "../components/blog-posts/blog-post"

const IndexPage = () => (
  <Layout>
    <Blog />

  </Layout>
)

export default IndexPage
