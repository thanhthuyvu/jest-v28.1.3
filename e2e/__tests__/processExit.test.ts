/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import runJest from '../runJest';

it('prints stack trace pointing to process.exit call', () => {
  const {stderr} = runJest('process-exit');

  expect(stderr).toMatchSnapshot();
});
