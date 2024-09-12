import z from 'zod'
// Verifica se dentro do process.env segue o formato desejado
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

// Se falhar, a aplicação não inicia
export const env = envSchema.parse(process.env)
