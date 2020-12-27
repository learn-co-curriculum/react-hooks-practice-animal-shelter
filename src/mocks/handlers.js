import { rest } from "msw";
import { getAll, getByType } from "./data";

export const handlers = [
  rest.get("http://localhost:3001/pets", (req, res, ctx) => {
    const type = req.url.searchParams.get("type");
    if (type) {
      return res(ctx.json(getByType(type)));
    }
    return res(ctx.json(getAll()));
  }),
];
