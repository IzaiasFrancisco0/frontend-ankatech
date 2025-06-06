// src/pages/ativos/index.tsx
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ativos Financeiros</h1>
      <ul className="space-y-2">
        {data?.map((ativo) => (
          <li key={ativo.id} className="border p-2 rounded">
            <strong>{ativo.nome}</strong> — R$ {ativo.valorAtual.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
