import z from 'zod'

export const UserSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: 'Requerido' })
    .min(2, { message: 'Mínimo 2 caracteres' })
    .max(50, { message: 'Máximo 50 caracteres' }),

  apellido: z
    .string()
    .trim()
    .min(1, { message: 'Requerido' })
    .min(2, { message: 'Mínimo 2 caracteres' })
    .max(50, { message: 'Máximo 50 caracteres' }),

  cedula: z
    .string()
    .trim()
    .min(1, { message: 'Requerido' })
    .min(7, { message: 'Mínimo 7 caracteres' })
    .max(8, { message: 'Máximo 8 caracteres' }),

  correo: z
    .string()
    .trim()
    .min(1, { message: 'Requerido' })
    .email({ message: 'Correo inválido' }),
})

export const SearchUserSchema = z.object({
  cedula: z
    .string()
    .trim()
    .min(1, { message: 'Requerido' })
    .min(7, { message: 'Mínimo 7 caracteres' })
    .max(8, { message: 'Máximo 8 caracteres' }),
})