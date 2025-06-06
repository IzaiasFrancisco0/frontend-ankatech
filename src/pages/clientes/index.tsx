// pages/clientes/index.tsx
import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import Link from 'next/link';

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <Link href="/clientes/novo" className="bg-blue-600 text-white px-4 py-2 inline-block mb-4">Novo Cliente</Link>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td className="border p-2">{cliente.nome}</td>
              <td className="border p-2">{cliente.email}</td>
              <td className="border p-2">{cliente.status}</td>
              <td className="border p-2">
                <Link href={`/clientes/${cliente.id}/editar`} className="text-blue-500 underline">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
