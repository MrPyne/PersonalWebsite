webpackJsonp([0],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_utils_colorManipulator__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_utils_colorManipulator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_utils_colorManipulator__);



/* harmony default export */ __webpack_exports__["a"] = ({
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
    primary1Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["lightGreen400"],
    primary2Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["lightGreen600"],
    primary3Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["grey400"],
    accent1Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["grey500"],
    accent2Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["grey100"],
    accent3Color: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["grey500"],
    textColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["darkBlack"],
    alternateTextColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["white"],
    canvasColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["white"],
    borderColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["grey400"],
    disabledColor: Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_utils_colorManipulator__["fade"])(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["darkBlack"], 0.3),
    pickerHeaderColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["lightGreen600"],
    clockCircleColor: Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_utils_colorManipulator__["fade"])(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["darkBlack"], 0.07),
    shadowColor: __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_colors__["fullBlack"]
  }
});

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_app__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__ = __webpack_require__(427);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

/* NPM */

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


/* ReactQL */

// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code.  Note:  This first is imported
// first, since it sets up our app's settings


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// ----------------------

// Create a new browser Apollo client
var client = Object(__WEBPACK_IMPORTED_MODULE_7_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = Object(__WEBPACK_IMPORTED_MODULE_8_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.hydrate(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
}

// The <Root> component.  We'll run this as a self-contained function since
// we're using a bunch of temporary vars that we can safely discard.
//
// If we have hot reloading enabled (i.e. if we're in development), then
// we'll wrap the whole thing in <AppContainer> so that our views can respond
// to code changes as needed
var Root = function () {
  // Wrap the component hierarchy in <BrowserRouter>, so that our children
  // can respond to route changes
  var Chain = function Chain() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
      { store: store, client: client },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_app__["a" /* default */], null)
      )
    );
  };

  // React hot reloading -- only enabled in development.  This branch will
  // be shook from production, so we can run a `require` statement here
  // without fear that it'll inflate the bundle size
  if (false) {
    // <AppContainer> will respond to our Hot Module Reload (HMR) changes
    // back from WebPack, and handle re-rendering the chain as needed
    var AppContainer = require('react-hot-loader').AppContainer;

    // Start our 'listener' at the root component, so that any changes that
    // occur in the hierarchy can be captured
    module.hot.accept('src/app', function () {
      // Refresh the entry point of our app, to get the changes.

      // eslint-disable-next-line
      require('src/app').default;

      // Re-render the hierarchy
      doRender();
    });

    return function () {
      return React.createElement(
        AppContainer,
        null,
        React.createElement(Chain, null)
      );
    };
  }
  return Chain;
}();

doRender();

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kit_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_reducers_navigater__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_main__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_global_css__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_global_css__);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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


/* App */



// Main component -- i.e. the 'root' React component in our app


// Init global styles.  These will be added to the resulting CSS automatically
// without any class hashing.  Use this to include default or framework CSS.


// ----------------------

/* REDUCERS */

// This must follow the shape
// {state, reducer()}, otherwise it will throw an error
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].addReducer('navigater', __WEBPACK_IMPORTED_MODULE_1_src_reducers_navigater__["a" /* default */]);

/* GRAPHQL */

// Enable the internal GraphQL server.  This will do two things:
//
// 1.  On the server, it will set-up the necessary route handlers to 'listen'
// to incoming GraphQL requests on `/graphql`, as well as (by default) set-up
// the GraphiQL IDE
//
// 2.  On the client, it will append the correct server URL so that we can
// call the ReactQL host properly, and let the server handle our requests
__WEBPACK_IMPORTED_MODULE_0_kit_config__["a" /* default */].enableGraphQLServer();

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (false) {
  // Pass in the schema to use for our internal GraphQL server.  Note we're
  // doing this inside a `SERVER` block to avoid importing a potentially large
  // file, which would then inflate our client bundle unnecessarily
  config.setGraphQLSchema(require('src/graphql/schema').default);

  /* CUSTOM ROUTES */

  // We can add custom routes to the web server easily, by using
  // `config.add<Get|Post|Put|Patch>Route()`.  Note:  These are server routes only.
  config.addGetRoute('/test', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
      var stateDump;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // For demo purposes, let's get a JSON dump of the current Redux state
              // to see that we can expect its contents
              stateDump = JSON.stringify(ctx.store.getState());

              // Display a simple message, along with the Redux dump.  Note that this
              // won't contain a full `apollo` response, because it hasn't passed through
              // the React handler -- but it *does* mean we can still manipulate the state
              // from within our root, or fire action handlers!

              ctx.body = 'Hello from your ReactQL route. Redux dump: ' + stateDump;

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  /* CUSTOM 404 HANDLER */

  // By default, if the server gets a route request that results in a 404,
  // it will set `ctx.status = 404` but continue to render the <NotFound>
  // block as normal.  If we want to add our own custom handler, we can use
  // `config.set404Handler()` as below.
  //
  // Note:  This only applies to SERVER routes.  On the client, the
  // <NotFound> block will *always* run.

  config.set404Handler(function (ctx) {
    // Like above, we'll grab a dump of the store state again -- this time,
    // it *will* contain a full `apollo` dump because in order to figure out that
    // a route has hit a 404, it will already have rendered the React chain
    // and retrieved any relevant GraphQL
    var stateDump = JSON.stringify(ctx.store.getState());

    // Explicitly set the return status to 404.  This is done for us by
    // default if we don't have a custom 404 handler, but left to the function
    // otherwise (since we might not always want to return a 404)
    ctx.status = 404;

    // Set the body
    ctx.body = 'This route does not exist on the server - Redux dump: ' + stateDump;
  });

  /* CUSTOM MIDDLEWARE */

  // We can set custom middleware to be processed on the server.  This gives us
  // fine-grain control over headers, requests, responses etc, and even decide
  // if we want to avoid the React handler until certain conditions
  config.addMiddleware(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Let's add a custom header so we can see middleware in action
              ctx.set('Powered-By', 'ReactQL');

              // Always return `next()`, otherwise the request won't 'pass' to the next
              // middleware in the stack (likely, the React handler)
              return _context2.abrupt('return', next());

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
}

// In app.js, we need to export the root component we want to mount as the
// starting point to our app.  We'll just export the `<Main>` component.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_src_components_main__["a" /* default */]);

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_seamless_immutable__);
// IMPORTS

/* NPM */


// ----------------------

var initialState = __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default()({
  openSideNavigator: false,
  appTitle: ''
});

/* harmony default export */ __webpack_exports__["a"] = ({

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { state, reducer() } } -- `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  state: initialState,
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'NAVIGATE_SIDE') {
      return state.merge({
        openSideNavigator: !state.openSideNavigator
      });
    }
    return state;
  }
});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_infinite__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_infinite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_infinite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_getMuiTheme__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_main_header__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_themes_customtheme__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_routes__ = __webpack_require__(409);
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




// Routing via React Router







/* ReactQL */

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
// import GraphQLMessage from 'src/components/graphql';


// ----------------------

var stylePage = {
  margin: '0',
  padding: '0',
  position: 'relative',
  border: '0',
  outline: '0'
};

var switchStyle = {
  paddingTop: __WEBPACK_IMPORTED_MODULE_6_src_themes_customtheme__["a" /* default */].spacing.desktopKeylineIncrement,
  paddingLeft: '0',
  border: '0',
  backgroundColor: 'red',
  outline: '0',
  boxSizing: 'borderBox'
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default.a,
    { muiTheme: __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_getMuiTheme___default()(__WEBPACK_IMPORTED_MODULE_6_src_themes_customtheme__["a" /* default */]) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: stylePage },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_main_header__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: switchStyle },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* Switch */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_7_src_components_routes__["a" /* Home */] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/printerProject_1', component: __WEBPACK_IMPORTED_MODULE_7_src_components_routes__["b" /* PrinterProject1 */] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/github', component: function component() {
              return window.location = 'https://github.com/MrPyne';
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { path: '/linkedin', component: function component() {
              return window.location = 'https://www.linkedin.com/in/matthew-pyne-97914465/';
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { component: __WEBPACK_IMPORTED_MODULE_7_src_components_routes__["c" /* WhenNotFound */] })
        )
      )
    )
  );
});

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Drawer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_assets_avatar_me_croped_jpg__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_assets_avatar_me_croped_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_src_assets_avatar_me_croped_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_main_onlinePresenceIcons__ = __webpack_require__(408);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React




// Material UI




// Material UI


// import MenuItem from 'material-ui/MenuItem';

// ----------------------

// HOC/decorator to listen to Redux store state





// ----------------------

var headerStyle = {
  top: '0',
  left: '0',
  marginTop: '0',
  position: 'fixed',
  boxShadow: 'none'
};

var stylePage = {

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
var AppHeader = (_dec = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["a" /* connect */])(function (state) {
  return { navigater: state.navigater };
}), _dec(_class = function (_React$PureComponent) {
  _inherits(AppHeader, _React$PureComponent);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    var _this = _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).call(this));

    _this.triggerNavSide = function (navPlace) {
      if (navPlace !== null && typeof navPlace === 'string') {
        _this.setState({
          appTitle: navPlace
        });
      }
      _this.props.dispatch({
        type: 'NAVIGATE_SIDE'
      });
    };

    _this.handleNestedListToggle = function (item) {
      _this.setState({
        open: item.state.open
      });
    };

    _this.state = {
      appTitle: 'Home',
      open: false
    };
    return _this;
  }

  // Trigger the `NAVIGATE_SIDE` action in Redux, to toggle openSideNavigator flag.
  // Note: by using the `= () {}` format, we're implicitly binding the component
  // to `this`, which is why we can use @connect's `.dispatch()` function that's
  // passed in as a prop


  _createClass(AppHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openSideNavigator = this.props.navigater.openSideNavigator;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: stylePage },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_AppBar___default.a, {
          title: this.state.appTitle,
          iconClassNameRight: 'icon-navigation-expand-more',
          onLeftIconButtonTouchTap: this.triggerNavSide,
          iconElementRight: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_src_components_main_onlinePresenceIcons__["a" /* default */], null),
          style: headerStyle }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Drawer___default.a,
          {
            title: 'Matthew Pyne',
            docked: false,
            open: openSideNavigator,
            onRequestChange: this.triggerNavSide },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_List__["List"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"],
              {
                disabled: true,
                leftAvatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar___default.a, { src: __WEBPACK_IMPORTED_MODULE_8_src_assets_avatar_me_croped_jpg___default.a }) },
              'Matthew Pyne'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"], {
              primaryText: 'Home',
              containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/' }),
              onClick: function onClick() {
                return _this2.triggerNavSide('Home');
              } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"], {
              primaryText: 'Projects',
              primaryTogglesNestedList: true,
              nestedItems: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"], {
                primaryText: '3D Printer DIY Kit 1',
                containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/printerProject_1' }),
                onClick: function onClick() {
                  return _this2.triggerNavSide('3D Printer DIY Kit 1');
                } })] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"], {
              primaryText: 'About',
              containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/about' }),
              onClick: function onClick() {
                return _this2.triggerNavSide('About');
              } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"], {
              primaryText: 'Contact',
              containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/contact' }),
              onClick: function onClick() {
                return _this2.triggerNavSide('Contact');
              } })
          )
        )
      );
    }
  }]);

  return AppHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);
AppHeader.propTypes = {
  navigater: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    openSideNavigator: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired
  })
};
AppHeader.defaultProps = {
  navigater: {
    openSideNavigator: false
  }
};


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/avatar-me-croped.d6bdff646cd3ff03fa1a032d6efd1c39.jpg";

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__);
// React





var listStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  padding: '0'
};

var itemStyle = {
  float: 'left',
  margin: '0',
  padding: '0'
};

var iconStyle = {
  color: '#ffffff',
  margin: '0',
  padding: '0'
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { style: listStyle },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { style: itemStyle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default.a,
        {
          containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/github' }),
          tooltip: 'Go to my GitHub',
          tooltipPosition: 'bottom-center',
          iconStyle: iconStyle,
          linkButton: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '', src: 'https://png.icons8.com/github/p1em/32', width: '32', height: '32' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { style: itemStyle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default.a,
        {
          containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */], { to: '/linkedin' }),
          tooltip: 'Go to my LinkedIn',
          tooltipPosition: 'bottom-center',
          iconStyle: iconStyle,
          linkButton: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '', src: 'https://png.icons8.com/linkedin-filled/ios7/32', width: '32', height: '32' })
      )
    )
  );
});

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PrinterProject1; });
/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WhenNotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_main_home__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_projects_printerProject1__ = __webpack_require__(413);
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



/* ReactQL */

// NotFound 404 handler for unknown routes





// ----------------------

// We'll display this <Home> component when we're on the / route
var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_main_home__["a" /* default */], null);
};

// We'll display this <PrinterProject1> component when we're on the / route
var PrinterProject1 = function PrinterProject1() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_projects_printerProject1__["a" /* default */], null);
};

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
var Page = function Page(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Changed route: ',
    match.params.name
  );
};

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

var styleNotFound = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  /* bring your own prefixes */
  transform: 'translate(-50%, -50%)',
  color: '#000000'
};

// Create a route that will be displayed when the code isn't found
var WhenNotFound = function WhenNotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_kit_lib_routing__["a" /* NotFound */],
    { style: styleNotFound },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { style: styleNotFound },
      'Unknown route - 404!'
    )
  );
};

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* unused harmony export Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(36);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS






// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.

var Status = function (_React$PureComponent) {
  _inherits(Status, _React$PureComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  _createClass(Status, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          code = _props.code,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { render: function render(_ref) {
          var staticContext = _ref.staticContext;

          if (staticContext) {
            staticContext.status = code;
          }
          return children;
        } });
    }
  }]);

  return Status;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.


Status.propTypes = {
  code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Status.defaultProps = {
  children: null
};
var NotFound = function (_React$PureComponent2) {
  _inherits(NotFound, _React$PureComponent2);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: 404 },
        children
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.
NotFound.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
NotFound.defaultProps = {
  children: null
};
var Redirect = function (_React$PureComponent3) {
  _inherits(Redirect, _React$PureComponent3);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          from = _props2.from,
          push = _props2.push,
          permanent = _props2.permanent;

      var code = permanent ? 301 : 302;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: code },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Redirect */], { to: to, from: from, push: push })
      );
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
Redirect.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  permanent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_themes_customtheme__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_assets_logo3_svg__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_assets_logo3_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_src_assets_logo3_svg__);




var styleHeader2 = {
  textAlign: 'center',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: __WEBPACK_IMPORTED_MODULE_1_src_themes_customtheme__["a" /* default */].palette.primary1Color
};

var styleBody = {
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

var styleHome = {
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

var titleMessage = 'Hi, I\'m Matthew';
var subTitleMessage = 'and this is my site!';

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: styleHome },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: styleHeader2 },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2_src_assets_logo3_svg___default.a, alt: 'MP' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { style: styleHeader2 },
        titleMessage
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        { style: styleHeader2 },
        subTitleMessage
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: styleBody },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'What I think is important to know about me is that I like to learn and build stuff. In my spare time am ussually building something or programming.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        'My education is in electrical and computer engineering, recieving a BENG degree from DalHousie University in 2015. I have worked, since 2015, developing freely available 3D CAD software, ProtocaseDesigner, at Protocases as a Software Engineer. I have also done other things but the majority of time has been at Protocase.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        'Feel free to check out some of my projects and or other aspects about me. Try visiting my GitHub to see what software projects am working on. Please note, this site was my first attempt at building a site and as such it is not the best but hopefully useable. Site is still under construction.'
      )
    )
  );
});

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo3.ccafac80a7071bacf978559215bc9a68.svg";

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Card__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_assets_tevo_logo_png__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_assets_tevo_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_src_assets_tevo_logo_png__);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["Card"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["CardMedia"],
      {
        overlay: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["CardTitle"], { title: '3D Printer Project Tarantula', subtitle: 'Tevo Tarantula' }) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_2_src_assets_tevo_logo_png___default.a, alt: '' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Card__["CardText"],
      null,
      'I set out to create a 3D printer and decided to meet it half way. This is why I choose a DIY kit. The reason I went with the TevoTarantula was mostly due postive things people were saying about it and the price was relative low. Other than some mods which I plan on doing phase 1 of this project is complete. I plan on using my TevoTarantula for future projects.',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
      '!!!!PICTURES GO HERE!!!!'
    )
  );
});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tevo-logo.00043d54d493103de60edd3268492bfe.png";

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createClient */
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_kit_config__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kit_lib_env__ = __webpack_require__(426);
// ----------------------
// IMPORTS

/* NPM */

// Apollo client library


/* ReactQL */

// Configuration


// Get environment, to figure out where we're running the GraphQL server


// ----------------------

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    }
  }, opt));
}

// Creates a new browser client
function browserClient() {
  // If we have an internal GraphQL server, we need to append it with a
  // call to `getServerURL()` to add the correct host (in dev + production)
  var uri = __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLServer ? '' + Object(__WEBPACK_IMPORTED_MODULE_2_kit_lib_env__["a" /* getServerURL */])() + __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint : __WEBPACK_IMPORTED_MODULE_1_kit_config__["a" /* default */].graphQLEndpoint;

  return createClient({
    networkInterface: Object(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
      // If we have an internal GraphQL server, then we should append the
      // URL with `getServerURL()` to get the correct hostname
      uri: uri
    })
  });
}

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getHost */
/* unused harmony export getServerHost */
/* unused harmony export getBrowserHost */
/* unused harmony export getPort */
/* unused harmony export getBrowserPort */
/* unused harmony export getServerPort */
/* unused harmony export getURL */
/* harmony export (immutable) */ __webpack_exports__["a"] = getServerURL;
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
var defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
var defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
var isProduction = "development" === 'production';
var isServer = "boolean" !== 'undefined' && false;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return (isServer ? 'SERVER' : 'BROWSER') + '_' + (isProduction ? 'PROD' : 'DEV');
}

// Get browser stub
function getBrowserStub() {
  return 'BROWSER_' + (isProduction ? 'PROD' : 'DEV');
}

// Get server stub
function getServerStub() {
  return 'SERVER_' + (isProduction ? 'PROD' : 'DEV');
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[getStub() + '_HOST'] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[getServerStub() + '_HOST'] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[getBrowserStub() + '_HOST'] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  var port = process.env[getStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  var port = process.env[getBrowserStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  var port = process.env[getServerStub() + '_PORT'];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  var ssl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return 'http' + (ssl ? 's' : '') + '://' + getHost() + ':' + getPort();
}

// Get the protocol://host:port of where the current server would bind
function getServerURL() {
  var ssl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return 'http' + (ssl ? 's' : '') + '://' + getServerHost() + ':' + getServerPort();
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(62)))

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_kit_config__ = __webpack_require__(80);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS

/* NPM */




/* Local */


// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
var hasState = !!(!false && window.__STATE__);

// Helper function that 'unwinds' the { reducerKey {state, reducer} } format
// from each imported reducer, and either returns the `reducer` function (if
// true) or the `state`, as an Immutable collection or the default state
function unwind() {
  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Get the combined reducers `reducer` or `state` object
  var r = Object.assign.apply(Object, [{}].concat(_toConsumableArray([].concat([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_3_kit_config__["a" /* default */].reducers)).map(function (arr) {
    return _defineProperty({}, arr[0], arr[1][reducer ? 'reducer' : 'state']);
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // We're looking for the state -- so let's map it
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(r).map(function (key) {
    return _defineProperty({}, key, hasState && __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default()(window.__STATE__[key]) || r[key]);
  }))));
}

function createNewStore(apolloClient) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware(), __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
  !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));

  return store;
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Simple class to act as a singleton for app-wide configuration.

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);

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


  _createClass(Config, [{
    key: 'addReducer',
    value: function addReducer(key, reducer) {
      if ((typeof reducer === 'undefined' ? 'undefined' : _typeof(reducer)) !== 'object' || !reducer.state || typeof reducer.reducer !== 'function') {
        throw new Error('Can\'t add reducer for \'' + key + '\' - reducer must be an object of {state, reducer}');
      }
      this.reducers.set(key, reducer);
    }

    /* WEB SERVER / SSR */

    // Disable the optional `koa-bodyparser`, to prevent POST data being sent to
    // each request.  By default, body parsing is enabled.

  }, {
    key: 'disableBodyParser',
    value: function disableBodyParser() {
      this.enableBodyParser = false;
    }
  }, {
    key: 'setBodyParserOptions',
    value: function setBodyParserOptions() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.bodyParserOptions = opt;
    }

    // Add custom middleware.  This should be an async func, for use with Koa

  }, {
    key: 'addMiddleware',
    value: function addMiddleware(middlewareFunc) {
      this.middleware.add(middlewareFunc);
    }

    // Adds a custom server route to attach to our Koa router

  }, {
    key: 'addRoute',
    value: function addRoute(method, route, handler) {
      this.routes.add({
        method: method,
        route: route,
        handler: handler
      });
    }

    // Adds custom GET route

  }, {
    key: 'addGetRoute',
    value: function addGetRoute(route, handler) {
      this.addRoute('get', route, handler);
    }

    // Adds custom POST route

  }, {
    key: 'addPostRoute',
    value: function addPostRoute(route, handler) {
      this.addRoute('post', route, handler);
    }

    // Adds custom PUT route

  }, {
    key: 'addPutRoute',
    value: function addPutRoute(route, handler) {
      this.addRoute('put', route, handler);
    }

    // Adds custom PATCH route

  }, {
    key: 'addPatchRoute',
    value: function addPatchRoute(route, handler) {
      this.addRoute('patch', route, handler);
    }

    // Adds custom DELETE route

  }, {
    key: 'addDeleteRoute',
    value: function addDeleteRoute(route, handler) {
      this.addRoute('delete', route, handler);
    }

    // 404 handler for the server.  By default, `kit/entry/server.js` will
    // simply return a 404 status code without modifying the HTML render.  By
    // setting a handler here, this will be returned instead

  }, {
    key: 'set404Handler',
    value: function set404Handler(func) {
      if (typeof func !== 'function') {
        throw new Error('404 handler must be a function');
      }
      this.handler404 = func;
    }

    /* GRAPHQL */

    // Enables internal GraphQL server.  Default GraphQL and GraphiQL endpoints
    // can be overridden

  }, {
    key: 'enableGraphQLServer',
    value: function enableGraphQLServer() {
      var endpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/graphql';
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLServer = true;
      this.graphQLEndpoint = endpoint;
      this.graphiQL = graphiQL;
    }

    // Set the GraphQL schema. This should only be called on the server, otherwise
    // the bundle size passed by the `schema` object will be unnecessarily inflated

  }, {
    key: 'setGraphQLSchema',
    value: function setGraphQLSchema(schema) {
      this.graphQLSchema = schema;
    }

    // Set an external GraphQL URI for use with Apollo

  }, {
    key: 'setGraphQLEndpoint',
    value: function setGraphQLEndpoint(uri) {
      var graphiQL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.graphQLEndpoint = uri;
      this.graphiQL = graphiQL;
    }
  }]);

  return Config;
}();

// Since there's only one `Config` instance globally, we'll create the new
// instance here and export it.  This will then provide any subsequent imports
// with the same object, so we can add settings to a common config


/* harmony default export */ __webpack_exports__["a"] = (new Config());

/***/ })

},[168]);
//# sourceMappingURL=browser.js.map