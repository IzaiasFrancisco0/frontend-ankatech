'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Ativo {
  nome: string;
}

interface Alocacao {
  id: number;
  quantidade: number;
  ativo: Ativo;
}

export default function AlocacoesPage({ params }: { params: { clienteId: string } }) {
  const [alocacoes, setAlocacoes] = useState<Alocacao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlocacoes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/clientes/${params.clienteId}/alocacoes`);
        setAlocacoes(res.data);
      } catch (error) {
        console.error('Erro ao buscar alocações:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlocacoes();
  }, [params.clienteId]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Alocações do Cliente {params.clienteId}</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="space-y-2">
          {alocacoes.map((alocacao) => (
            <li key={alocacao.id} className="border p-2 rounded">
              Ativo: {alocacao.ativo.nome} — Quantidade: {alocacao.quantidade}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
