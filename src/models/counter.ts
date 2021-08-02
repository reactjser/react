import { createModel } from '@rematch/core';

import { RootModel } from '.';

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
      const res = await fetch('/addCount');
      const data: {
        code: number;
        message: string;
      } = await res.json();
      if (data.code === 0) {
        dispatch.counter.incrementByAmount(payload);
      }
    },
  }),
});
