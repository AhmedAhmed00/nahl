import { z } from "zod";

export const loginschema = z.object({
  phone_number: z
    .string()
    .transform((val) => (val.startsWith("+") ? val : `+${val}`)),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});
