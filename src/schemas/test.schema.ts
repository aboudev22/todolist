import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom est obligatoire")
    .max(25, "le nom est trop long"),
  lastName: z.string().min(1, "Le prénom est obligatoire").max(25, "Trop long"),
  age: z.number({ invalid_type_error: "L'age est un nombre" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export default formSchema;
