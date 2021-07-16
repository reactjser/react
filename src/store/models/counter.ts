import { createModel } from '@rematch/core';

import { RootModel } from '.';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const counter = createModel<RootModel>()({
  state: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      return state;
    },
    decrement: (state) => {
      state.value -= 1;
      return state;
    },
    incrementByAmount: (state, payload: number) => {
      state.value += payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number) {
      await delay(1000);
      dispatch.counter.incrementByAmount(payload);
    },
  }),
});
