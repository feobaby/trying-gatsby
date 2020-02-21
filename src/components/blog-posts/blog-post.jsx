import React, {Fragment} from "react"
import "./blog-post.css"
import { Link } from "gatsby"

export const Blog = ()=> (
    <Fragment>
    <div className="box">
        <div>
        <p className="date">Feb 19, 2020.</p>
            <Link to="/page-2/"> <p className="title">Creating mini contact cards using react, 
                 using algolia to search for data and setting it up as a PWA</p>
                 </Link>
                 <p className="details">This tutorial will be about getting few details from a JSON 
                     object as mini contact cards using the 
                     front-end technology(react) and a search engine(algolia),
                      then we host it on netlify...</p>
                      </div>
                      </div>

                      <div className="box">
                          <div>
                      <p className="date">Feb 7, 2020.</p>
            <Link to="/page-2/"> <p className="title">Is A.I(M.L) a Threat to Software Engineering?</p>
                 </Link>
                 <p className="details">This tutorial will be about getting few details from a JSON 
                     object as mini contact cards using the 
                     front-end technology(react) and a search engine(algolia),
                      then we host it on netlify...</p>                          
                      </div>
                 </div>
                 </Fragment>

);
