'use client';

import styles from '../styles/AtivosList.module.css';

type Ativo = {
  id: number;
  nome: string;
  valorAtual: number;
};

type Props = {
  ativos: Ativo[];
};

export default function AtivosList({ ativos }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ativos Financeiros</h1>
      <ul className={styles.list}>
        {ativos.map((ativo) => (
          <li key={ativo.id} className={styles.item}>
            <strong>{ativo.nome}</strong> — R$ {ativo.valorAtual.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
