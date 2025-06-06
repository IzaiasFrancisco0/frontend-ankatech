// src/hooks/useClientes.ts
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export type Cliente = {
  id: number;
  nome: string;
  email: string;
  status: 'ativo' | 'inativo';
};

export function useClientes() {
  return useQuery<Cliente[]>({
    queryKey: ['clientes'],
    queryFn: async () => {
      const response = await api.get('/clientes'); // Ex: GET /clientes
      return response.data;
    },
  });
}
