import { initTRPC } from "@trpc/server";
import { z } from "zod";

const trpc = initTRPC.create();
const router = trpc.router;
const publicProcedure = trpc.procedure;

export const appRouter = router({
  getPosts: publicProcedure.query(() => [
    { title: "title1", content: "content1" },
    { title: "title2", content: "content2" },
    { title: "title3", content: "content3" },
    { title: "title4", content: "content4" },
  ]),
  addPost: publicProcedure.input(z.object({ title: z.string(), content: z.string() })).mutation((opts) => {
    const { input } = opts;
    console.log(input);
  }),
});

export type AppRouter = typeof appRouter;
