const defaultState = {
  buttonTitle: 'Press me!'
};

function main(state = defaultState, action) {
  switch(action.type) {
    case 'CHANGE_BUTTON_TITLE':
      return Object.assign({}, state, {
        buttonTitle: action.buttonTitle
      });
    default:
      return state;
  }
}

export default main;
