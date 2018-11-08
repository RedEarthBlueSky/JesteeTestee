import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Profile from '../src/Profile';

configure({ adapter: new Adapter() });

it('Testing props', () => {
  const wrapper = shallow(<Profile data='Hello' />).props();
  console.warn(wrapper.children.props.children);

  expect(wrapper.children.props.children).toEqual('Am I a props child?');
});
