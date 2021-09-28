import React from 'react'
import '../App.css'

export default function Quotation() {
  return (
    <section className="quotation">
      <div className="">
        <div className="">
          <div className="">
            <h2>
              Are You Struggling With Your Website's
              <br />
              Poor Ranking &amp; Traffic?
            </h2>
            <p>
              We help you with a 100% Assurance
              <br />
              Share the following information and check out our FREE in-depth
              analysis &amp; custom strategy on
              <br />
              how we'll make your website rank.
            </p>
          </div>
        </div>

        <div className="container">
          <form action="action_page.php">
            <div className="row">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Name"
              />
            </div>
            <div className="row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="row">
              <input type="url" id="url" name="url" placeholder="Website url" />
            </div>
            <div className="row">
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="Your Monthly Budget"
              />
            </div>
            <div className="row">
              <textarea
                placeholder="Please Share Information For Custom Blue Print 
                              ● Website URL 
                              ● Target keywords 
                              ● Target Location  
                              ● Competitors"
                required=""
              ></textarea>
            </div>
            <div className="row">
              <input type="submit" value="Yes I want" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
