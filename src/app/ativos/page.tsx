'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import AtivosList from './AtivosList';

type Ativo = {
  id: number;
  nome: string;
  valorAtual: number;
};

export default function ListaAtivos() {
  const { data, isLoading, error } = useQuery<Ativo[]>({
    queryKey: ['ativos'],
    queryFn: async () => {
      const response = await api.get('/ativos');
      return response.data;
    },
  });

  if (isLoading) return <p>Carregando ativos...</p>;
  if (error) return <p>Erro ao buscar ativos</p>;

  return <AtivosList ativos={data ?? []} />;
}
