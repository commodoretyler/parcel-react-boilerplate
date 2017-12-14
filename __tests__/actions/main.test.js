import * as mainActionCreators from '../../src/actions/main';

describe('Main action creators', () => {
  test('change button title (changeButtonTitle)', () => {
    const buttonTitle = 'Test Title';
    const actionType  = 'CHANGE_BUTTON_TITLE';

    const expected    = {
      type: actionType,
      buttonTitle
    }

    expect(mainActionCreators.changeButtonTitle(buttonTitle)).toEqual(expected);
  });

});

