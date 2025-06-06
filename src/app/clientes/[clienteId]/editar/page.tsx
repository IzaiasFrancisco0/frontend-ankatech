'use client';

import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { clienteSchema, ClienteFormData } from '@/schemas/clienteSchema';
import { api } from '@/services/api';
import styles from '../../../styles/ClienteForm.module.css';

export default function EditarCliente() {
  const router = useRouter();
  const params = useParams();
  const clienteId = params.clienteId as string; 

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ClienteFormData>({
    resolver: zodResolver(clienteSchema),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clienteId) return;

    async function fetchCliente() {
      try {
        const response = await api.get(`/clientes/${clienteId}`);
        reset(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar cliente:', error);
        router.push('/clientes');
      }
    }

    fetchCliente();
  }, [clienteId, reset, router]);

  async function onSubmit(data: ClienteFormData) {
    try {
      await api.put(`/clientes/${clienteId}`, data);
      router.push('/clientes');
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    }
  }

  if (loading) return <p>Carregando...</p>;

  return (
   <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
  <h1 className={styles.title}>Editar Cliente</h1>

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

  <button type="submit" className={styles.button}>Atualizar</button>
</form>
  );
}
