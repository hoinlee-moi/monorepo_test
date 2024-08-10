import { z } from "zod";
import { procedure, router } from "./trpcSet";

export const appRouter = router({
  getPosts: procedure.query(() => [
    {
      title: "title1",
      content: "content1",
      createAt: new Date("2024-08-07"),
    },
    {
      title: "title2",
      content: "content2",
      createAt: new Date("2024-08-08"),
    },
    {
      title: "title3",
      content: "content3",
      createAt: new Date("2024-08-09"),
    },
    {
      title: "title4",
      content: "content4",
      createAt: new Date("2024-08-10"),
    },
  ]),
  addPosts: procedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation((opts) => {
      const { input } = opts;
      console.log(input);
    }),
});

export type AppRouter = typeof appRouter;
