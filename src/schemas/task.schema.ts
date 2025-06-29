import * as z from "zod/v4";

const taskSckema = z.object({
  description: z.string().min(3),
  finished: z.boolean(),
  id: z.number(),
  date: z.date(),
});

export default taskSckema;
