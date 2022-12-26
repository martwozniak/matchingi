import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { technologiesRouter } from "./technologies";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  technologies: technologiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
