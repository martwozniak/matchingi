import { router } from '../trpc';
import { authRouter } from './auth';
import { exampleRouter } from './example';
import { offerRouter } from './offer';
import { technologiesRouter } from './technologies';
import { stripeRouter } from './stripe';
import { userRouter } from './user';

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  technologies: technologiesRouter,
  offers: offerRouter,
  stripe: stripeRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
