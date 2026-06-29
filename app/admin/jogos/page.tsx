import FormJogo from "@/components/admin/FormJogo";
import ListaJogos from "@/components/admin/ListaJogos";

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Administração de Jogos
        </h1>

        <FormJogo />

        <ListaJogos />

      </div>

    </main>
  );
}