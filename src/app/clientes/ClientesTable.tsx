'use client';

import Link from 'next/link';
import styles from '../styles/ClientesTable.module.css';

type Cliente = {
    id: string;
    nome: string;
    email: string;
    status: 'ATIVO' | 'INATIVO';
};

type Props = {
    clientes: Cliente[];
};

export default function ClientesTable({ clientes }: Props) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Clientes</h1>

            <Link href="/clientes/novo" className={styles.btnLink}>
                    Novo Cliente
            </Link>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>Status</th>
                            <th className={styles.th}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id} className={styles.trHover}>
                                <td className={styles.td}>{cliente.nome}</td>
                                <td className={styles.td}>{cliente.email}</td>
                                <td className={styles.td}>{cliente.status}</td>
                                <td className={styles.td}>
                                    <Link href={`/clientes/${cliente.id}/editar`} className={styles.btnLink}>
                                        Editar
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
