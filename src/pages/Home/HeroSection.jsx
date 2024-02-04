import React from 'react'
import Layout from './HomeScreen/Layout'

function HeroSection() {
 
  return (
    <Layout>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title"> Hey, I'am Abdul Rehman.  </p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Full Stack</span>{""}
              <br/>
              Devloper
            </h1>
            <p className="hero--section--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, autem?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="btn btn--primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src='./../img/' />
        </div>
      </section>
    </Layout>
  )
}

export default HeroSection