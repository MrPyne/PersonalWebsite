/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Simple class to act as a singleton for app-wide configuration.

let Config = class Config {
  constructor() {
    // Store reducers in a `Map`, for easy key retrieval
    this.reducers = new Map();

    // Create a set for routes -- to retrieve based on insertion order
    this.routes = new Set();

    // Custom middleware -- again, based on insertion order
    this.middleware = new Set();

    // GraphQL endpoint.  This needs setting via either `config.enableGraphQLServer()`
    // or `config.setGraphQLEndpoint()`
    this.graphQLEndpoint = null;

    // Set to true if we're using an internal GraphQL server
    this.graphQLServer = false;

    // GraphQL schema (if we're using an internal server)
    this.graphQLSchema = null;

    // Attach a GraphiQL IDE endpoint to our server?  By default - no.  If
    // this === true, this will default to `/graphql`.  If it's a string, it'll
    // default to the string value
    this.graphiQL = false;

    // Enable body parsing by default.  Leave `koa-bodyparser` opts as default
    this.enableBodyParser = true;
    this.bodyParserOptions = {};
  }

  /* REDUX */

  // Adds a new reducer.  Checks that `reducer` fits the right shape, otherwise
  // throws an error
  addReducer(key, reducer) {
    if (typeof reducer !== 'object' || !reducer.state || typeof reducer.reducer !== 'function') {
      throw new Error(`Can't add reducer for '${key}' - reducer must be an object of {state, reducer}`);
    }
    this.reducers.set(key, reducer);
  }

  /* WEB SERVER / SSR */

  // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
  // each request.  By default, body parsing is enabled.
  disableBodyParser() {
    this.enableBodyParser = false;
  }

  setBodyParserOptions(opt = {}) {
    this.bodyParserOptions = opt;
  }

  // Add custom middleware.  This should be an async func, for use with Koa
  addMiddleware(middlewareFunc) {
    this.middleware.add(middlewareFunc);
  }

  // Adds a custom server route to attach to our Koa router
  addRoute(method, route, handler) {
    this.routes.add({
      method,
      route,
      handler
    });
  }

  // Adds custom GET route
  addGetRoute(route, handler) {
    this.addRoute('get', route, handler);
  }

  // Adds custom POST route
  addPostRoute(route, handler) {
    this.addRoute('post', route, handler);
  }

  // Adds custom PUT route
  addPutRoute(route, handler) {
    this.addRoute('put', route, handler);
  }

  // Adds custom PATCH route
  addPatchRoute(route, handler) {
    this.addRoute('patch', route, handler);
  }

  // Adds custom DELETE route
  addDeleteRoute(route, handler) {
    this.addRoute('delete', route, handler);
  }

  // 404 handler for the server.  By default, `kit/entry/server.js` will
  // simply return a 404 status code without modifying the HTML render.  By
  // setting a handler here, this will be returned instead
  set404Handler(func) {
    if (typeof func !== 'function') {
      throw new Error('404 handler must be a function');
    }
    this.handler404 = func;
  }

  /* GRAPHQL */

  // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
  // can be overridden
  enableGraphQLServer(endpoint = '/graphql', graphiQL = true) {
    this.graphQLServer = true;
    this.graphQLEndpoint = endpoint;
    this.graphiQL = graphiQL;
  }

  // Set the GraphQL schema. This should only be called on the server, otherwise
  // the bundle size passed by the `schema` object will be unnecessarily inflated
  setGraphQLSchema(schema) {
    this.graphQLSchema = schema;
  }

  // Set an external GraphQL URI for use with Apollo
  setGraphQLEndpoint(uri, graphiQL = true) {
    this.graphQLEndpoint = uri;
    this.graphiQL = graphiQL;
  }
};

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config

exports.default = new Config();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = getHost;
exports.getServerHost = getServerHost;
exports.getBrowserHost = getBrowserHost;
exports.getPort = getPort;
exports.getBrowserPort = getBrowserPort;
exports.getServerPort = getServerPort;
exports.getURL = getURL;
exports.getServerURL = getServerURL;
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
const defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
const defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
const isProduction = "development" === 'production';
const isServer = "boolean" !== 'undefined' && true;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return `${isServer ? 'SERVER' : 'BROWSER'}_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get browser stub
function getBrowserStub() {
  return `BROWSER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get server stub
function getServerStub() {
  return `SERVER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[`${getStub()}_HOST`] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[`${getServerStub()}_HOST`] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[`${getBrowserStub()}_HOST`] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  const port = process.env[`${getStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  const port = process.env[`${getBrowserStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  const port = process.env[`${getServerStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL(ssl = false) {
  return `http${ssl ? 's' : ''}://${getHost()}:${getPort()}`;
}

// Get the protocol://host:port of where the current server would bind
function getServerURL(ssl = false) {
  return `http${ssl ? 's' : ''}://${getServerHost()}:${getServerPort()}`;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(44);

var _colorManipulator = __webpack_require__(45);

exports.default = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 60, // left-nav width = this * 4
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 30,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.lightGreen400,
    primary2Color: _colors.lightGreen600,
    primary3Color: _colors.grey400,
    accent1Color: _colors.grey500,
    accent2Color: _colors.grey100,
    accent3Color: _colors.grey500,
    textColor: _colors.darkBlack,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey400,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.lightGreen600,
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(4);

var _chalk2 = _interopRequireDefault(_chalk);

var _env = __webpack_require__(5);

var _console = __webpack_require__(12);

var _server = __webpack_require__(15);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Host and port -- from the environment


// Import console messages
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library
const HOST = (0, _env.getHost)();

// Extend the server base


/* Local */

// Local environment

const PORT = (0, _env.getPort)();

// Get manifest values
const css = '/assets/css/style.css';
const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the server
_server2.default.then(({ router, app }) => {
  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  app.listen({ host: HOST, port: PORT }, () => {
    (0, _console.logServerStarted)({
      type: 'server-side rendering',
      host: HOST,
      port: PORT,
      chalk: _chalk2.default.bgYellow.black
    });
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(13);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(4);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(14);

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Chalk library, to add colour to our console logs
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);

  const localURL = `http://${opt.host}:${opt.port}`;
  message += `- ${_chalk2.default.bold('Local:           ')} ${localURL}`;

  try {
    const url = `http://${_ip2.default.address()}:${opt.port}`;
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

var _stream = __webpack_require__(16);

__webpack_require__(17);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(19);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(6);

var _kcors = __webpack_require__(20);

var _kcors2 = _interopRequireDefault(_kcors);

var _koaSend = __webpack_require__(21);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(22);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(23);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(24);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(25);

var _reactHelmet = __webpack_require__(26);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apolloServerKoa = __webpack_require__(27);

var _apolloLocalQuery = __webpack_require__(28);

var _apolloLocalQuery2 = _interopRequireDefault(_apolloLocalQuery);

var _graphql = __webpack_require__(7);

var graphql = _interopRequireWildcard(_graphql);

var _app = __webpack_require__(29);

var _app2 = _interopRequireDefault(_app);

var _redux = __webpack_require__(55);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(58);

var _ssr2 = _interopRequireDefault(_ssr);

var _apollo = __webpack_require__(59);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _paths = __webpack_require__(60);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Create a network layer based on settings.  This is an immediate function
// that binds either the `localInterface` function (if there's a built-in
// GraphQL) or `externalInterface` (if we're pointing outside of ReactQL)


// App settings, which we'll use to customise the server -- must be loaded
// *after* app.js has been called, so the correct settings have been set


// Initial view to send back HTML render


/* ReactQL */

// App entry point.  This must come first, because app.js will set-up the
// server config that we'll use later


// Allow local GraphQL schema querying when using a built-in GraphQL server


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Enable cross-origin requests


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* Node */

// For pre-pending a `<!DOCTYPE html>` stream to the server response
const createNeworkInterface = (() => {
  function localInterface() {
    return _apolloLocalQuery2.default.createLocalInterface(graphql, _config2.default.graphQLSchema);
  }

  function externalInterface() {
    return (0, _reactApollo.createNetworkInterface)({
      uri: _config2.default.graphQLEndpoint
    });
  }

  return _config2.default.graphQLServer ? localInterface : externalInterface;
})();

// Static file middleware


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Import all of the GraphQL lib, for use with our Apollo client connection


// Import the Apollo GraphQL server, for Koa


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)
// import ReactDOMServer from 'react-dom/server';


/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: ctx.store, client: ctx.apollo },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  Or, we can use
      // `config.set404Handler()` to pass in a custom handler func that takes
      // the `ctx` and store

      if (_config2.default.handler404) {
        _config2.default.handler404(ctx);

        // Return early -- no need to set a response body, because that should
        // be taken care of by the custom 404 handler
        return;
      }

      ctx.status = routeContext.status;
    }

    // Create a HTML stream, to send back to the browser
    const htmlStream = new _stream.PassThrough();

    // Prefix the doctype, so the browser knows to expect HTML5
    htmlStream.write('<!DOCTYPE html>');

    // Create a stream of the React render. We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    const reactStream = _server2.default.renderToStream(_react2.default.createElement(
      _ssr2.default,
      {
        head: _reactHelmet2.default.rewind(),
        window: {
          webpackManifest: chunkManifest,
          __STATE__: ctx.store.getState()
        },
        css: css,
        scripts: scripts },
      components
    ));

    // Pipe the React stream to the HTML output
    reactStream.pipe(htmlStream);

    // Set the return type to `text/html`, and stream the response back to
    // the client
    ctx.type = 'text/html';
    ctx.body = htmlStream;
  };
}

// Build the router, based on our app's settings.  This will define which
// Koa route handlers
const router = new _koaRouter2.default().
// Set-up a general purpose /ping route to check the server is alive
get('/ping', async ctx => {
  ctx.body = 'pong';
})

// Favicon.ico.  By default, we'll serve this as a 204 No Content.
// If /favicon.ico is available as a static file, it'll try that first
.get('/favicon.ico', async ctx => {
  ctx.res.statusCode = 204;
});

// Build the app instance, which we'll use to define middleware for Koa
// as a precursor to handling routes
const app = new _koa2.default()
// Adds CORS config
.use((0, _kcors2.default)())

// Preliminary security for HTTP headers
.use((0, _koaHelmet2.default)())

// Error wrapper.  If an error manages to slip through the middleware
// chain, it will be caught and logged back here
.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // TODO we've used rudimentary console logging here.  In your own
    // app, I'd recommend you implement third-party logging so you can
    // capture errors properly
    console.log('Error', e.message);
    ctx.body = 'There was an error. Please try again later.';
  }
})

// It's useful to see how long a request takes to respond.  Add the
// timing to a HTTP Response header
.use(async (ctx, next) => {
  const start = _microseconds2.default.now();
  await next();
  const end = _microseconds2.default.parse(_microseconds2.default.since(start));
  const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
  ctx.set('Response-Time', `${total / 1e3}ms`);
})

// Create a new Apollo client and Redux store per request.  This will be
// stored on the `ctx` object, making it available for the React handler or
// any subsequent route/middleware
.use(async (ctx, next) => {
  // Create a new server Apollo client for this request
  ctx.apollo = (0, _apollo.createClient)({
    ssrMode: true,
    networkInterface: createNeworkInterface()
  });

  // Create a new Redux store for this request
  ctx.store = (0, _redux2.default)(ctx.apollo);

  // Pass to the next middleware in the chain: React, custom middlware, etc
  return next();
});

// Attach custom middleware
_config2.default.middleware.forEach(middlewareFunc => app.use(middlewareFunc));

// Attach an internal GraphQL server, if we need one
if (_config2.default.graphQLServer) {
  // Attach the GraphQL schema to the server, and hook it up to the endpoint
  // to listen to POST requests
  router.post(_config2.default.graphQLEndpoint, (0, _apolloServerKoa.graphqlKoa)(context => ({
    // Bind the current request context, so it's accessible within GraphQL
    context,
    // Attach the GraphQL schema
    schema: _config2.default.graphQLSchema
  })));
}

// Do we need the GraphiQL query interface?  This can be used if we have an
// internal GraphQL server, or if we're pointing to an external server.  First,
// we check if `config.graphiql` === `true` to see if we need one...

if (_config2.default.graphiQL) {
  // The GraphiQL endpoint default depends on this order of precedence:
  // explicit -> internal GraphQL server endpoint -> /graphql
  let graphiQLEndpoint;

  if (typeof _config2.default.graphiQL === 'string') {
    // Since we've explicitly passed a string, we'll use that as the endpoint
    graphiQLEndpoint = _config2.default.graphiQL;
  } else if (_config2.default.graphQLServer) {
    // If we have an internal GraphQL server, AND we haven't set a string,
    // the default GraphiQL path should be the same as the server endpoint
    graphiQLEndpoint = _config2.default.graphQLEndpoint;
  } else {
    // Since we haven't set anything, AND we don't have an internal server,
    // by default we'll use `/graphql` which will work for an external server
    graphiQLEndpoint = '/graphql';
  }

  router.get(graphiQLEndpoint, (0, _apolloServerKoa.graphiqlKoa)({
    endpointURL: _config2.default.graphQLEndpoint
  }));
}

// Attach any custom routes we may have set in userland
_config2.default.routes.forEach(route => {
  router[route.method](route.route, route.handler);
});

/* BODY PARSING */

// `koa-bodyparser` is used to process POST requests.  Check that it's enabled
// (default) and apply a custom config if we need one
if (_config2.default.enableBodyParser) {
  app.use(__webpack_require__(62)(
  // Pass in any options that may have been set in userland
  _config2.default.bodyParserOptions));
}

// Run the server

exports.default = async function server() {
  return {
    router,
    app
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-koa");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("apollo-local-query");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _navigater = __webpack_require__(30);

var _navigater2 = _interopRequireDefault(_navigater);

var _main = __webpack_require__(31);

var _main2 = _interopRequireDefault(_main);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* REDUCERS */

// This must follow the shape
// {state, reducer()}, otherwise it will throw an error


// Main component -- i.e. the 'root' React component in our app
// Your app's entry point.  Every ReactQL projects requires 'src/app.js',
// which both the server and browser will import.
//
// In this file, you'll do two things:
//
// 1.  Import `kit/config`, and configure your app.  In this example, I'm
// adding a custom Redux reducer that acts as a simple counter, and enabling
// a built-in GraphQL server that imports a schema for a simple message.
//
// 2.  Export the root React component that goes between <div id="main"/>
// in the server-side HTML.

// ----------------------
// IMPORTS

/* ReactQL */

// Config API, for adding reducers and configuring our ReactQL app
_config2.default.addReducer('navigater', _navigater2.default);

/* GRAPHQL */

// Enable the internal GraphQL server.  This will do two things:
//
// 1.  On the server, it will set-up the necessary route handlers to 'listen'
// to incoming GraphQL requests on `/graphql`, as well as (by default) set-up
// the GraphiQL IDE
//
// 2.  On the client, it will append the correct server URL so that we can
// call the ReactQL host properly, and let the server handle our requests


// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


/* App */

_config2.default.enableGraphQLServer();

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (true) {
  // Pass in the schema to use for our internal GraphQL server.  Note we're
  // doing this inside a `SERVER` block to avoid importing a potentially large
  // file, which would then inflate our client bundle unnecessarily
  _config2.default.setGraphQLSchema(__webpack_require__(54).default);

  /* CUSTOM ROUTES */

  // We can add custom routes to the web server easily, by using
  // `config.add<Get|Post|Put|Patch>Route()`.  Note:  These are server routes only.
  _config2.default.addGetRoute('/test', async ctx => {
    // For demo purposes, let's get a JSON dump of the current Redux state
    // to see that we can expect its contents
    const stateDump = JSON.stringify(ctx.store.getState());

    // Display a simple message, along with the Redux dump.  Note that this
    // won't contain a full `apollo` response, because it hasn't passed through
    // the React handler -- but it *does* mean we can still manipulate the state
    // from within our root, or fire action handlers!
    ctx.body = `Hello from your ReactQL route. Redux dump: ${stateDump}`;
  });

  /* CUSTOM 404 HANDLER */

  // By default, if the server gets a route request that results in a 404,
  // it will set `ctx.status = 404` but continue to render the <NotFound>
  // block as normal.  If we want to add our own custom handler, we can use
  // `config.set404Handler()` as below.
  //
  // Note:  This only applies to SERVER routes.  On the client, the
  // <NotFound> block will *always* run.

  _config2.default.set404Handler(ctx => {
    // Like above, we'll grab a dump of the store state again -- this time,
    // it *will* contain a full `apollo` dump because in order to figure out that
    // a route has hit a 404, it will already have rendered the React chain
    // and retrieved any relevant GraphQL
    const stateDump = JSON.stringify(ctx.store.getState());

    // Explicitly set the return status to 404.  This is done for us by
    // default if we don't have a custom 404 handler, but left to the function
    // otherwise (since we might not always want to return a 404)
    ctx.status = 404;

    // Set the body
    ctx.body = `This route does not exist on the server - Redux dump: ${stateDump}`;
  });

  /* CUSTOM MIDDLEWARE */

  // We can set custom middleware to be processed on the server.  This gives us
  // fine-grain control over headers, requests, responses etc, and even decide
  // if we want to avoid the React handler until certain conditions
  _config2.default.addMiddleware(async (ctx, next) => {
    // Let's add a custom header so we can see middleware in action
    ctx.set('Powered-By', 'ReactQL');

    // Always return `next()`, otherwise the request won't 'pass' to the next
    // middleware in the stack (likely, the React handler)
    return next();
  });
}

// In app.js, we need to export the root component we want to mount as the
// starting point to our app.  We'll just export the `<Main>` component.
exports.default = _main2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = __webpack_require__(8);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

const initialState = (0, _seamlessImmutable2.default)({
  openSideNavigator: false,
  appTitle: ''
}); // IMPORTS

/* NPM */
exports.default = {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { state, reducer() } } -- `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  state: initialState,
  reducer(state = initialState, action) {
    if (action.type === 'NAVIGATE_SIDE') {
      return state.merge({
        openSideNavigator: !state.openSideNavigator
      });
    }
    return state;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInfinite = __webpack_require__(32);

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var _reactRouterDom = __webpack_require__(2);

var _MuiThemeProvider = __webpack_require__(33);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(34);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _customtheme = __webpack_require__(9);

var _customtheme2 = _interopRequireDefault(_customtheme);

var _routes = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Routing via React Router
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
const stylePage = {
  margin: '0',
  padding: '0',
  position: 'relative',
  border: '0',
  outline: '0'
};

/* ReactQL */

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
// import GraphQLMessage from 'src/components/graphql';


const switchStyle = {
  paddingTop: _customtheme2.default.spacing.desktopKeylineIncrement,
  paddingLeft: '0',
  border: '0',
  backgroundColor: 'red',
  outline: '0',
  boxSizing: 'borderBox'
};

exports.default = () => _react2.default.createElement(
  _MuiThemeProvider2.default,
  { muiTheme: (0, _getMuiTheme2.default)(_customtheme2.default) },
  _react2.default.createElement(
    'div',
    { style: stylePage },
    _react2.default.createElement(_header2.default, null),
    _react2.default.createElement(
      'div',
      { style: switchStyle },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _routes.Home }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/printerProject_1', component: _routes.PrinterProject1 }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/github', component: () => window.location = 'https://github.com/MrPyne' }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/linkedin', component: () => window.location = 'https://www.linkedin.com/in/matthew-pyne-97914465/' }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _routes.WhenNotFound })
      )
    )
  )
);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-infinite");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class; // React


// Material UI


// Material UI


// import MenuItem from 'material-ui/MenuItem';

// ----------------------

// HOC/decorator to listen to Redux store state


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _AppBar = __webpack_require__(36);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _List = __webpack_require__(37);

var _Avatar = __webpack_require__(38);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Drawer = __webpack_require__(39);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(40);

var _avatarMeCroped = __webpack_require__(41);

var _avatarMeCroped2 = _interopRequireDefault(_avatarMeCroped);

var _onlinePresenceIcons = __webpack_require__(42);

var _onlinePresenceIcons2 = _interopRequireDefault(_onlinePresenceIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

const headerStyle = {
  top: '0',
  left: '0',
  marginTop: '0',
  position: 'fixed',
  boxShadow: 'none'
};

const stylePage = {

  /* Set the width to match that of the viewport. */
  width: '100vw',
  left: '0',
  top: '0',
  margin: '0',
  padding: '0'

};

// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
let AppHeader = (_dec = (0, _reactRedux.connect)(state => ({ navigater: state.navigater })), _dec(_class = class AppHeader extends _react2.default.PureComponent {

  constructor() {
    super();

    this.triggerNavSide = navPlace => {
      if (navPlace !== null && typeof navPlace === 'string') {
        this.setState({
          appTitle: navPlace
        });
      }
      this.props.dispatch({
        type: 'NAVIGATE_SIDE'
      });
    };

    this.handleNestedListToggle = item => {
      this.setState({
        open: item.state.open
      });
    };

    this.state = {
      appTitle: 'Home',
      open: false
    };
  }

  // Trigger the `NAVIGATE_SIDE` action in Redux, to toggle openSideNavigator flag.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  render() {
    const { openSideNavigator } = this.props.navigater;
    return _react2.default.createElement(
      'div',
      { style: stylePage },
      _react2.default.createElement(_AppBar2.default, {
        title: this.state.appTitle,
        iconClassNameRight: 'icon-navigation-expand-more',
        onLeftIconButtonTouchTap: this.triggerNavSide,
        iconElementRight: _react2.default.createElement(_onlinePresenceIcons2.default, null),
        style: headerStyle }),
      _react2.default.createElement(
        _Drawer2.default,
        {
          title: 'Matthew Pyne',
          docked: false,
          open: openSideNavigator,
          onRequestChange: this.triggerNavSide },
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(
            _List.ListItem,
            {
              disabled: true,
              leftAvatar: _react2.default.createElement(_Avatar2.default, { src: _avatarMeCroped2.default }) },
            'Matthew Pyne'
          ),
          _react2.default.createElement(_List.ListItem, {
            primaryText: 'Home',
            containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/' }),
            onClick: () => this.triggerNavSide('Home') }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: 'Projects',
            primaryTogglesNestedList: true,
            nestedItems: [_react2.default.createElement(_List.ListItem, {
              primaryText: '3D Printer DIY Kit 1',
              containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/printerProject_1' }),
              onClick: () => this.triggerNavSide('3D Printer DIY Kit 1') })] }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: 'About',
            containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/about' }),
            onClick: () => this.triggerNavSide('About') }),
          _react2.default.createElement(_List.ListItem, {
            primaryText: 'Contact',
            containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/contact' }),
            onClick: () => this.triggerNavSide('Contact') })
        )
      )
    );
  }
}) || _class);
AppHeader.propTypes = {
  navigater: _propTypes2.default.shape({
    openSideNavigator: _propTypes2.default.bool.isRequired
  })
};
AppHeader.defaultProps = {
  navigater: {
    openSideNavigator: false
  }
};
exports.default = AppHeader;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/avatar-me-croped.d6bdff646cd3ff03fa1a032d6efd1c39.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _IconButton = __webpack_require__(43);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  padding: '0'
}; // React


const itemStyle = {
  float: 'left',
  margin: '0',
  padding: '0'
};

const iconStyle = {
  color: '#ffffff',
  margin: '0',
  padding: '0'
};

exports.default = () => _react2.default.createElement(
  'ul',
  { style: listStyle },
  _react2.default.createElement(
    'li',
    { style: itemStyle },
    _react2.default.createElement(
      _IconButton2.default,
      {
        containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/github' }),
        tooltip: 'Go to my GitHub',
        tooltipPosition: 'bottom-center',
        iconStyle: iconStyle,
        linkButton: true },
      _react2.default.createElement('img', { alt: '', src: 'https://png.icons8.com/github/p1em/32', width: '32', height: '32' })
    )
  ),
  _react2.default.createElement(
    'li',
    { style: itemStyle },
    _react2.default.createElement(
      _IconButton2.default,
      {
        containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/linkedin' }),
        tooltip: 'Go to my LinkedIn',
        tooltipPosition: 'bottom-center',
        iconStyle: iconStyle,
        linkButton: true },
      _react2.default.createElement('img', { alt: '', src: 'https://png.icons8.com/linkedin-filled/ios7/32', width: '32', height: '32' })
    )
  )
);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/colorManipulator");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhenNotFound = exports.Page = exports.PrinterProject1 = exports.Home = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routing = __webpack_require__(47);

var _home = __webpack_require__(48);

var _home2 = _interopRequireDefault(_home);

var _printerProject = __webpack_require__(50);

var _printerProject2 = _interopRequireDefault(_printerProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = exports.Home = () => _react2.default.createElement(_home2.default, null);

// We'll display this <PrinterProject1> component when we're on the / route


/* ReactQL */

// NotFound 404 handler for unknown routes
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
const PrinterProject1 = exports.PrinterProject1 = () => _react2.default.createElement(_printerProject2.default, null);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
const Page = exports.Page = ({ match }) => _react2.default.createElement(
  'h1',
  null,
  'Changed route: ',
  match.params.name
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: _propTypes2.default.shape({
    params: _propTypes2.default.object
  }).isRequired
};

const styleNotFound = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  /* bring your own prefixes */
  transform: 'translate(-50%, -50%)',
  color: '#000000'
};

// Create a route that will be displayed when the code isn't found
const WhenNotFound = exports.WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  { style: styleNotFound },
  _react2.default.createElement(
    'h1',
    { style: styleNotFound },
    'Unknown route - 404!'
  )
);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
let Status = class Status extends _react2.default.PureComponent {

  render() {
    const { code, children } = this.props;
    return _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      } });
  }
};

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

Status.propTypes = {
  code: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
};
Status.defaultProps = {
  children: null
};
let NotFound = exports.NotFound = class NotFound extends _react2.default.PureComponent {

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      Status,
      { code: 404 },
      children
    );
  }
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.

NotFound.propTypes = {
  children: _propTypes2.default.node
};
NotFound.defaultProps = {
  children: null
};
let Redirect = exports.Redirect = class Redirect extends _react2.default.PureComponent {

  render() {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return _react2.default.createElement(
      Status,
      { code: code },
      _react2.default.createElement(_reactRouterDom.Redirect, { to: to, from: from, push: push })
    );
  }
};
Redirect.propTypes = {
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  from: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  permanent: _propTypes2.default.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _customtheme = __webpack_require__(9);

var _customtheme2 = _interopRequireDefault(_customtheme);

var _logo = __webpack_require__(49);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styleHeader2 = {
  textAlign: 'center',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: _customtheme2.default.palette.primary1Color
};

const styleBody = {
  textAlign: 'left',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',
  marginLeft: '25em',
  marginRight: '25em',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: '#FFF'
};

const styleHome = {
  textAlign: 'center',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: '#FFF'
};

const titleMessage = 'Hi, I\'m Matthew';
const subTitleMessage = 'and this is my site!';

exports.default = () => _react2.default.createElement(
  'div',
  { style: styleHome },
  _react2.default.createElement(
    'div',
    { style: styleHeader2 },
    _react2.default.createElement('img', { src: _logo2.default, alt: 'MP' }),
    _react2.default.createElement(
      'h1',
      { style: styleHeader2 },
      titleMessage
    ),
    _react2.default.createElement(
      'h2',
      { style: styleHeader2 },
      subTitleMessage
    )
  ),
  _react2.default.createElement(
    'div',
    { style: styleBody },
    _react2.default.createElement(
      'p',
      null,
      'What I think is important to know about me is that I like to learn and build stuff. In my spare time am ussually building something or programming.',
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      'My education is in electrical and computer engineering, recieving a BENG degree from DalHousie University in 2015. I have worked, since 2015, developing freely available 3D CAD software, ProtocaseDesigner, at Protocases as a Software Engineer. I have also done other things but the majority of time has been at Protocase.',
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      'Feel free to check out some of my projects and or other aspects about me. Try visiting my GitHub to see what software projects am working on. Please note, this site was my first attempt at building a site and as such it is not the best but hopefully useable. Site is still under construction.'
    )
  )
);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo3.ccafac80a7071bacf978559215bc9a68.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(51);

var _tevoLogo = __webpack_require__(52);

var _tevoLogo2 = _interopRequireDefault(_tevoLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => _react2.default.createElement(
  _Card.Card,
  null,
  _react2.default.createElement(
    _Card.CardMedia,
    {
      overlay: _react2.default.createElement(_Card.CardTitle, { title: '3D Printer Project Tarantula', subtitle: 'Tevo Tarantula' }) },
    _react2.default.createElement('img', { src: _tevoLogo2.default, alt: '' })
  ),
  _react2.default.createElement(
    _Card.CardText,
    null,
    'I set out to create a 3D printer and decided to meet it half way. This is why I choose a DIY kit. The reason I went with the TevoTarantula was mostly due postive things people were saying about it and the price was relative low. Other than some mods which I plan on doing phase 1 of this project is complete. I plan on using my TevoTarantula for future projects.',
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    '!!!!PICTURES GO HERE!!!!'
  )
);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tevo-logo.00043d54d493103de60edd3268492bfe.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(7);

// ----------------------

// GraphQL can handle Promises from its `resolve()` calls, so we'll create a
// simple async function that returns a simple message.  In practice, `resolve()`
// will generally pull from a 'real' data source such as a database
async function getMessage() {
  return {
    text: `Hello from the GraphQL server @ ${new Date()}`
  };
}

// Message type.  Imagine this like static type hinting on the 'message'
// object we're going to throw back to the user
// Schema for sample GraphQL server.

// ----------------------
// IMPORTS

// GraphQL schema library, for building our GraphQL schema
const Message = new _graphql.GraphQLObjectType({
  name: 'Message',
  description: 'GraphQL server message',
  fields() {
    return {
      text: {
        type: _graphql.GraphQLString,
        resolve(msg) {
          return msg.text;
        }
      }
    };
  }
});

// Root query.  This is our 'public API'.
const Query = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields() {
    return {
      message: {
        type: Message,
        resolve() {
          return getMessage();
        }
      }
    };
  }
});

// The resulting schema.  We insert our 'root' `Query` object, to tell our
// GraphQL server what to respond to.  We could also add a root `mutation`
// if we want to pass mutation queries that have side-effects (e.g. like HTTP POST)
exports.default = new _graphql.GraphQLSchema({
  query: Query
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS

/* NPM */


/* Local */


exports.default = createNewStore;

var _redux = __webpack_require__(56);

var _reduxThunk = __webpack_require__(57);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(8);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// Helper function that 'unwinds' the { reducerKey {state, reducer} } format
// from each imported reducer, and either returns the `reducer` function (if
// true) or the `state`, as an Immutable collection or the default state
function unwind(reducer = true) {
  // Get the combined reducers `reducer` or `state` object
  const r = Object.assign({}, ...[].concat([..._config2.default.reducers].map(arr => ({
    [arr[0]]: arr[1][reducer ? 'reducer' : 'state']
  }))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // We're looking for the state -- so let's map it
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: hasState && (0, _seamlessImmutable2.default)(window.__STATE__[key]) || r[key]
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, scripts, window, css, children }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement(
      'div',
      { id: 'main' },
      children
    ),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Html;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;
exports.browserClient = browserClient;

var _reactApollo = __webpack_require__(6);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _env = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults


/* ReactQL */

// Configuration
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo
  }, opt));
}

// Creates a new browser client


// Get environment, to figure out where we're running the GraphQL server
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  const uri = _config2.default.graphQLServer ? `${(0, _env.getServerURL)()}${_config2.default.graphQLEndpoint}` : _config2.default.graphQLEndpoint;

  return createClient({
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      // If we have an internal GraphQL server, then we should append the
      // URL with `getServerURL()` to get the correct hostname
      uri
    })
  });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(61);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map