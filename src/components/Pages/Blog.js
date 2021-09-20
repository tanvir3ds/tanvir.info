import React, { Component } from "react";
import img_blog from "../../img/facebook.jpg";

class Blog extends Component {
  render() {
    return (
      <>
        <div className="main" id="nav-close">
          <div className="banner-text">
            <h2>Blog</h2>
          </div>

          

          <div className="blog">
            <a href="blog-single.html">
              <img src={img_blog} className="card-img-top" alt="some value"></img>

              <div className="card-body">
                <h3>Lorem Ipsum</h3>
                <p className="card-text text-justify">
                  
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                </p>
               
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Blog;
