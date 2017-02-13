'use strict';

import isMediaGreaterThan from '../isMediaGreaterThan';
import test from 'gore-gulp/ava/test';

test('compares greater vs smaller', t => {
  t.true(isMediaGreaterThan('Mobile', 'Medium'));
});

test('compares smaller vs greater', t => {
  t.false(isMediaGreaterThan('Small', 'Mobile'));
});
