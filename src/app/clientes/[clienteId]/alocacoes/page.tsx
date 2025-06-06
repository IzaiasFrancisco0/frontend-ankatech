'use client';

import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../styles/AtivosList.module.css';

interface Ativo {
  nome: string;
}

interface Alocacao {
  id: number;
  quantidade: number;
  ativo: Ativo;
}

interface PageProps {
  params: Promise<{ clienteId?: string }>;
}

export default function AlocacoesPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const clienteId = resolvedParams.clienteId;

  const [alocacoes, setAlocacoes] = useState<Alocacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!clienteId) {
      setErrorMsg('ID do cliente não fornecido.');
      setLoading(false);
      return;
    }

    const fetchAlocacoes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/clientes/${clienteId}/alocacoes`);
        setAlocacoes(res.data);
        if (res.data.length === 0) {
          setErrorMsg('Nenhuma alocação encontrada para este cliente.');
        }
      } catch (error) {
        setErrorMsg('Erro ao buscar alocações. Cliente pode não existir.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlocacoes();
  }, [clienteId]);

  if (loading) return <p>Carregando...</p>;
  if (errorMsg) return <p className="text-red-500">{errorMsg}</p>;

  return (
    <div className="p-4">
      <h1 className={styles.title}>Alocações do Cliente {clienteId}</h1>

      <ul className={styles.list}>
        {alocacoes.map(aloc => (
          <li key={aloc.id} className={styles.item}>
            Ativo: {aloc.ativo.nome} — Quantidade: {aloc.quantidade}
          </li>
        ))}
      </ul>

    </div>
  );
}
