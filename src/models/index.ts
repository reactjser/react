import { Models } from '@rematch/core';
import { dolphins } from './dolphins';
import { sharks } from './sharks';
import { counter } from './counter';

export interface RootModel extends Models<RootModel> {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
  counter: typeof counter;
}

export const models: RootModel = { dolphins, sharks, counter };
