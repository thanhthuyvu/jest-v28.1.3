/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

jasmine.addMatchers({
  theSpanishInquisition: () => ({
    compare: (actual, expected) => ({
      message: 'Nobdy expects the Spanish Inquisition!',
      pass: false,
    }),
  }),
});

test('jasmine.addMatchers', () => {
  expect('Anybody').not.theSpanishInquisition();
});
