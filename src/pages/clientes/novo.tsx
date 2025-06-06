// pages/clientes/novo.tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/services/api';
import { useRouter } from 'next/router';

const schema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  status: z.enum(['ATIVO', 'INATIVO']),
});

type FormData = z.infer<typeof schema>;

export default function NovoCliente() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  async function onSubmit(data: FormData) {
    await api.post('/clientes', data);
    router.push('/clientes');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Novo Cliente</h1>

      <div>
        <label>Nome</label>
        <input {...register('nome')} className="block border p-1" />
        {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} className="block border p-1" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>Status</label>
        <select {...register('status')} className="block border p-1">
          <option value="ATIVO">Ativo</option>
          <option value="INATIVO">Inativo</option>
        </select>
        {errors.status && <p className="text-red-500">{errors.status.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Salvar</button>
    </form>
  );
}