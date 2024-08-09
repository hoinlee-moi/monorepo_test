import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: ({ req, res }) => ({}),
  })
);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
