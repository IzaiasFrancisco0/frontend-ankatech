import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sistema de Clientes e Ativos</h1>

      <div className="space-y-2">
        <Link href="/clientes">
          <Button variant="default" size="lg">Ir para Clientes</Button>
        </Link>

        <Link href="/ativos">
          <Button variant="default">Ir para Ativos</Button>
        </Link>
<Link href={`/clientes/1/alocacoes`}>Ver Alocações</Link>


      </div>
    </main>
  );
}

