import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

it('check function and state test case', () => {

  let HomeData = renderer.create(<App />).getInstance();

  HomeData.change(2)

  expect(HomeData.state.data).toEqual(20)
})
