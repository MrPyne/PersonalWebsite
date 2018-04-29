// React
import React from 'react';

import { Link } from 'react-router-dom';

// Material UI
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

// Material UI
import Drawer from 'material-ui/Drawer';

// import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
// ----------------------

// HOC/decorator to listen to Redux store state
import { connect } from 'react-redux';

import PicMe from '../../assets/avatar-me-croped.jpg';
import OnlinePresenceIcons from '../../components/main/onlinePresenceIcons';

// ----------------------

const headerStyle = {
  top: '0',
  left: '0',
  marginTop: '0',
  position: 'fixed',
  boxShadow: 'none',
};

const stylePage = {

  /* Set the width to match that of the viewport. */
  width: '100vw',
  left: '0',
  top: '0',
  margin: '0',
  padding: '0',

};

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
export default class AppHeader extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      appTitle: 'Home',
      open: false,
      openSideNavigator: false,
    };
  }

  // Trigger the `NAVIGATE_SIDE` action in Redux, to toggle openSideNavigator flag.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop
  triggerNavSide = navPlace => {
    console.log("stuff", navPlace);
    if (navPlace !== null && typeof navPlace === 'string') {
      this.setState({ appTitle: navPlace });
    }
    this.setState((prevState) => {
      return {
        openSideNavigator: !prevState.openSideNavigator
      }
    });

    console.log(this.state);
  };

  render() {
    return (
      <div style={stylePage}>
        <AppBar
          title={this.state.appTitle}
          iconClassNameRight="icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.triggerNavSide}
          onLeftIconButtonClick={this.triggerNavSide}
          iconElementRight={<OnlinePresenceIcons />}
          style={headerStyle} />
        <Drawer
          title="Matthew Pyne"
          docked={false}
          open={this.state.openSideNavigator}
          onRequestChange={this.triggerNavSide}>
          <List>
            <ListItem
              disabled
              leftAvatar={
                <Avatar src={PicMe} />
              }>
              Matthew Pyne
            </ListItem>
            <ListItem
              primaryText="Home"
              containerElement={<Link to="/" />}
              onClick={() => this.triggerNavSide('Home')} />
            <ListItem
              primaryText="Projects"
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  primaryText="3D Printer DIY Kit 1"
                  containerElement={<Link to="/printerProject_1" />}
                  onClick={() => this.triggerNavSide('3D Printer DIY Kit 1')} />,
              ]} />
            <ListItem
              primaryText="About"
              containerElement={<Link to="/about" />}
              onClick={() => this.triggerNavSide('About')} />
            <ListItem
              primaryText="Contact"
              containerElement={<Link to="/contact" />}
              onClick={() => this.triggerNavSide('Contact')} />
          </List>
        </Drawer>
      </div>
    );
  }
}
