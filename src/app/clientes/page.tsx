'use client';

import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import ClientesTable from './ClientesTable';

type Cliente = {
  id: string;
  nome: string;
  email: string;
  status: 'ATIVO' | 'INATIVO';
};

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    async function carregarClientes() {
      try {
        const response = await api.get('/clientes');
        setClientes(response.data);
      } catch (err) {
        console.error('Erro ao buscar clientes:', err);
      }
    }
    carregarClientes();
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <ClientesTable clientes={clientes} />
    </div>
  );
}
