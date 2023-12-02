import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: "Name must be a string" })
    .max(20, { message: "Password less than 20 character" })
    .optional(),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
});

export const UserValidation = {
  userValidationSchema,
};
