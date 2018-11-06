import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Users from '../src/features/middleware/users';

it('API test case', async function() {
  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        json: function() {
          return { Id: 1 }
        }
      })
    })
    return p;

  })
  const response = await Users.all();
  console.warn(response);
  expect(response.Id).toBe(1)

})
