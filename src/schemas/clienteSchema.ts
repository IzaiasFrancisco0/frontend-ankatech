import { z } from 'zod';

export const clienteSchema = z.object({
  nome: z.string().min(3, 'O nome precisa ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  status: z.enum(['ATIVO', 'INATIVO'], {
    required_error: 'O status é obrigatório',
  }),
});

export type ClienteFormData = z.infer<typeof clienteSchema>;
