'use client';

import styles from './styles/HomePage.module.css';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Sistema de Investimentos</h1>

      <div className={styles.buttonGroup}>
        <button onClick={() => router.push('/clientes')} className={styles.button}>
          Gerenciar Clientes
        </button>
        <button onClick={() => router.push('/ativos')} className={styles.button}>
          Ver Ativos
        </button>
        <button onClick={() => router.push('/clientes/1/alocacoes')} className={styles.button}>
          Ver Alocações
        </button>
      </div>
    </main>
  );
}
