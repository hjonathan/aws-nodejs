import * as z from "zod";
const TokenValidation = z.object({
  token: z.string().length(36),
});

export const BearerValidation = z.object({
  bearer: z.string().length(16),
});

export default TokenValidation;
