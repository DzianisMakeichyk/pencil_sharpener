'use strict';

import isMediaLessThan from '../isMediaLessThan';
import test from 'gore-gulp/ava/test';

test('constructs api request uri', t => {
  t.is(isMediaLessThan('Mobile', 'Small'), false);
});
