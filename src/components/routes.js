// Demonstrates several components on one page, each with their own `export`.
//
// These are smaller components that <Main> imports, and changes depending
// on the page route (via React Router).
//
// <WhenNotFound> demonstrates the use of <NotFound>, a ReactQL helper
// component that signals to our web server that we have a 404 error, to handle
// accordingly

// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import PropTypes from 'prop-types';

/* ReactQL */

// NotFound 404 handler for unknown routes
import { NotFound } from 'kit/lib/routing';

import HomeComponent from 'src/components/main/home';
import PrinterProject1Component from 'src/components/projects/printerProject1';

// ----------------------

// We'll display this <Home> component when we're on the / route
export const Home = () => (
  <HomeComponent />
);

// We'll display this <PrinterProject1> component when we're on the / route
export const PrinterProject1 = () => (
  <PrinterProject1Component />
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
export const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

const styleNotFound = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  /* bring your own prefixes */
  transform: 'translate(-50%, -50%)',
  color: '#000000',
};

// Create a route that will be displayed when the code isn't found
export const WhenNotFound = () => (
  <NotFound style={styleNotFound}>
    <h1 style={styleNotFound}>Unknown route - 404!</h1>
  </NotFound>
);
