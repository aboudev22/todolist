import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Veuillez entrer votre nom.")
    .max(25, "Le nom ne peut pas dépasser 25 caractères."),

  lastName: z
    .string()
    .min(1, "Veuillez entrer votre prénom.")
    .max(25, "Le prénom ne peut pas dépasser 25 caractères."),

  age: z
    .number({
      required_error: "L'âge est requis.",
      invalid_type_error: "L'âge doit être un nombre.",
    })
    .int("L'âge doit être un nombre entier.")
    .positive("L'âge doit être supérieur à zéro.")
    .lte(120, "L'âge ne peut pas dépasser 120 ans."),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export default formSchema;
