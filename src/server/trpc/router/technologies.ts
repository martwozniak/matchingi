import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const technologiesRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
      return 1;//ctx.prisma.technologies.findMany();
  }),
});
