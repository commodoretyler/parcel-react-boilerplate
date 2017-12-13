const CHANGE_BUTTON_TITLE = 'CHANGE_BUTTON_TITLE';

export function changeButtonTitle(buttonTitle) {
  return {
    type: CHANGE_BUTTON_TITLE,
    buttonTitle
  };
}

export function toggleButtonTitle(title) {
  return dispatch => {
    const newTitle = title === 'Press me!' ? 'You clicked me!' : 'Press me!';
    return dispatch(changeButtonTitle(newTitle));
  }
}
