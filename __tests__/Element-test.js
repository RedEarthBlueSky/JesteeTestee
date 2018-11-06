import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

const findElement = (tree, element) => {

  let result;

  for(const node in tree.children) {
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};

it('find element', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();

  expect(findElement(tree, 'username')).toBeDefined();
});
