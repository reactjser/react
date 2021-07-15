import { createModel } from '@rematch/core';
import { delay } from './utils';
import { RootModel } from '.';

export const counter = createModel<RootModel>()({
  state: {
    value: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      value: state.value + 1,
    }),
    decrement: (state) => ({
      ...state,
      value: state.value - 1,
    }),
    incrementByAmount: (state, payload: number) => ({
      ...state,
      value: state.value + payload,
    }),
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number) {
      await delay(500);
      dispatch.counter.incrementByAmount(payload);
    },
  }),
});
