import { rest } from 'msw';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const handlers = [
  rest.get('/addCount', async (req, res, ctx) => {
    await delay(1000);

    return res(
      ctx.json({
        code: 0,
        message: 'success',
      }),
    );
  }),
];
