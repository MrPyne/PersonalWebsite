import Immutable from 'seamless-immutable';

const initialState = Immutable({
  openSideNavigator: false,
  appTitle: '',
});

export default (state = initialState, action) => {
    if (action.type === 'NAVIGATE_SIDE') {
      return state.merge({
        openSideNavigator: !state.openSideNavigator,
      });
    }
    return state;
};
