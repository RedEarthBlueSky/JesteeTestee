import 'react-native';
import 'isomorphic-fetch';
//  equivalent of require('es6-promise').polyfill();
// import "es6-promise/auto";
import React from 'react';
import renderer from 'react-test-renderer';

import Users from '../src/features/middleware/users';

it('API test case', async function() {
  // global.fetch = jest.fn().mockImplementation(() => {
  //   var p = new Promise((resolve, reject) => {
  //     resolve({
  //       json: function() {
  //         return { Id: 2 }
  //       }
  //     })
  //   })
  //   return p;
  // })

  const response = await Users.all();
  console.warn(response.movies);
  // expect(response.movies[2].title).toBe('The Matrix');
  // expect(response.movies[0].id).toBe('1');
  expect(response.movies[1].releaseYear).toBe('1985');
})
