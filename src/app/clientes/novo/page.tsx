'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clienteSchema, ClienteFormData } from '@/schemas/clienteSchema';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import styles from '../../styles/ClienteForm.module.css';

export default function NovoCliente() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClienteFormData>({
    resolver: zodResolver(clienteSchema),
  });

  const router = useRouter();

  async function onSubmit(data: ClienteFormData) {
    await api.post('/clientes', data);
    router.push('/clientes');
  }

  return (
 <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
  <h1 className={styles.title}>Novo Cliente</h1>

  <div className={styles.field}>
    <label className={styles.label}>Nome</label>
    <input {...register('nome')} className={styles.input} />
    {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
  </div>

  <div className={styles.field}>
    <label className={styles.label}>Email</label>
    <input {...register('email')} className={styles.input} />
    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
  </div>

  <div className={styles.field}>
    <label className={styles.label}>Status</label>
    <select {...register('status')} className={styles.select}>
      <option value="ATIVO">Ativo</option>
      <option value="INATIVO">Inativo</option>
    </select>
    {errors.status && <p className={styles.error}>{errors.status.message}</p>}
  </div>

  <button type="submit" className={styles.button}>Salvar</button>
</form>

  );
}
