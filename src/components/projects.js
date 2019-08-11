import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Personal Website</CardTitle>
            <CardText>
              This site was writen using reactjs. It uses React, React Router and React ML. This was my first
              attempt at javascript and createing a website.
            </CardText>
            <CardActions border>
              <a className="poject-link" href="https://github.com/MrPyne/PersonalWebsite" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Tracker */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle class="tracker-card-title" >Tracker</CardTitle>
            <CardText>
              My friend and business partner created Tracker Inventory Systems.
              Our suite of software includes a node.js GraphQL server AWS, PostgreSQL database 
              on AWS, responsive Reactjs Apollo web client, and a Android client.
            </CardText>
            <CardActions border>
              <a className="poject-link" href="https://www.trackerinventorysystems.com/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-cloud" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >JCad</CardTitle>
            <CardText>
              JCad is my attempt to write my own CAD kernal and interface purely in Java. The software is broken up in separate gradle modules so that
              modules can be replaced as needed. The main modules are the core and client. The core contains all the math
              and the underlining BREP data structure. Client uses core but also lets a user interact
              with their 3D design. You can use the core on its own in your own projects if you like.
              Or you can use the client and write your own plugins.
            </CardText>
            <CardActions border>
              <a className="poject-link" href="https://gitlab.com/mattpyne/JCad" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle className="tevo-card-title" >3D Printer Project Tarantula</CardTitle>
            <CardText>
              I set out to create a 3D printer and ended up to meeting it half way with a DIY kit.
              The reason I went with the TevoTarantula was mostly due
              postive things people were saying about it and the price was relative low.
              Other than some mods which I plan on doing I consider it complete for now.
              I do plan on using my TevoTarantula for future projects.
            </CardText>
            {/* <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions> */}
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Crossword</CardTitle>
            <CardText>
              Crossword game. Simple crossword using libGDX game engine and mostly writen in kotlin.
            </CardText>
            <CardActions border>
              <a className="poject-link" href="https://github.com/MrPyne/crossword" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>3D Printer</Tab>
          <Tab>Kotlin</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
