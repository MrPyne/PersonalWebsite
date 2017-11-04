// IMPORTS

/* NPM */
import Immutable from 'seamless-immutable';

// ----------------------

const initialState = Immutable({
  openSideNavigator: false,
  appTitle: '',
});

export default {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { state, reducer() } } -- `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  state: initialState,
  reducer(state = initialState, action) {
    if (action.type === 'NAVIGATE_SIDE') {
      return state.merge({
        openSideNavigator: !state.openSideNavigator,
      });
    }
    return state;
  },
};
