import { z } from "zod";

export const loginschema = z.object({
  phone: z.string(),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});
