import { z } from "zod";

export const BookSchema = (validCategoryIds) =>
  z.object({
    titulo: z
      .string()
      .trim()
      .nonempty({ message: 'Requerido' })
      .min(3, { message: 'Mínimo 3 caracteres' })
      .max(50, { message: 'Máximo 50 caracteres' }),

    autor: z
      .string()
      .trim()
      .nonempty({ message: 'Requerido' })
      .min(2, { message: 'Mínimo 2 caracteres' })
      .max(50, { message: 'Máximo 50 caracteres' }),

    isbn: z
      .string()
      .trim()
      .nonempty({ message: 'Requerido' })
      .length(13, { message: 'Debe tener exactamente 13 caracteres' }),

    imagen: z
      .string()
      .trim()
      .nonempty({ message: 'Requerido' }),

    categoria: z
      .coerce
      .number({
        invalid_type_error: "La categoría es obligatoria",
        required_error: "La categoría es obligatoria"
      })
      .refine(id => id > 0, {
        message: "La categoría es obligatoria"
      })
      .refine(id => validCategoryIds.includes(id), {
        message: "Selecciona una categoría válida"
      })
  })
