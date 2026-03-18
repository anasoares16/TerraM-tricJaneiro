import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Vitrine() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/");
      }
    }
    checkUser();
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-3xl font-bold mb-6">
         Empresas parceiras para soluções ambientais
      </h1>

      <p className="text-gray-400 mb-10">
        Com base no seu diagnóstico, recomendamos:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* bloquinho 1 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">Energia Solar</h2>
          <p className="text-gray-400 text-sm">
            Reduza sua conta de energia e impacto ambiental.
          </p>
        </div>

        {/* bloquinho 2 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2"> Reuso de Água</h2>
          <p className="text-gray-400 text-sm">
            Sistemas para economizar água no dia a dia.
          </p>
        </div>

        {/* bloquinho 3 */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2"> Coleta Inteligente</h2>
          <p className="text-gray-400 text-sm">
            Soluções para reciclagem eficiente.
          </p>
        </div>

      </div>
    </section>
  );
} 