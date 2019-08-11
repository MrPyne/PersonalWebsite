import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from "../assets/avatar-me-croped.jpg"


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Me}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Engineer</h1>

              <hr />

              <p>Java | Swing | JavaFx | Kotlin | Android | JNI | Swig</p>
              <p>HTML/CSS | JavaScript | React | NodeJS | GraphQL | Apollo | PostgreSQL </p>
              <p>Auxilary C | C++ | C# </p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/matthew-pyne-97914465/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/MrPyne/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Gitlab */}
                <a href="https://gitlab.com/mattpyne" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

                {/* Youtube */}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a> */}

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
