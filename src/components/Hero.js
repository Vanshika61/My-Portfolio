import React from 'react'

export default function Hero() {
  return (
    <div>
      <main id="hero_section">
        <div className="hero_container">
          <div className="home_left">
            <h1>Hi, My name is Vanshika Agrawal.</h1>
            <p id="p_margin">
              I am a passionate front-end developer and also an open-source enthusiast. Currently I am learning React JS and exploring things. I'm also a community freak, who loves to join and organize different events for communities.
            </p>
            <button className="btn btn-outline" id="btn_signup">
              <a className="nav-link" target="_blank" href="#">Get Resume</a>
            </button>
          </div>
          <div className="home_right">
            <img id="home_img" src="dp.png" alt="Image" />
          </div>
        </div>
      </main>
    </div>
  )
}
