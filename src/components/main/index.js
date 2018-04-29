// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/components/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';

import Infinite from 'react-infinite';

// Routing via React Router
import {
  Route,
  Switch,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppHeader from 'src/components/main/header';
import CustomTheme from 'src/themes/customtheme';

/* ReactQL */

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
// import GraphQLMessage from 'src/components/graphql';
import {
  Home,
  PrinterProject1,
  WhenNotFound } from 'src/components/routes';

// ----------------------

const stylePage = {
  margin: '0',
  padding: '0',
  position: 'relative',
  border: '0',
  outline: '0',
};

const switchStyle = {
  paddingTop: CustomTheme.spacing.desktopKeylineIncrement,
  paddingLeft: '0',
  border: '0',
  backgroundColor: 'red',
  outline: '0',
  boxSizing: 'borderBox',
};


export default () => (
  <MuiThemeProvider muiTheme={getMuiTheme(CustomTheme)}>
    <div style={stylePage}>
      <AppHeader />
      <div style={switchStyle}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/printerProject_1" component={PrinterProject1} />
          <Route path="/github" component={() => window.location = 'https://github.com/MrPyne'} />
          <Route path="/linkedin" component={() => window.location = 'https://www.linkedin.com/in/matthew-pyne-97914465/'} />
          <Route component={WhenNotFound} />
        </Switch>
      </div>
    </div>
  </MuiThemeProvider>
);
