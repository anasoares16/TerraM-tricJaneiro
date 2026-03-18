import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function LoginSingup() {
  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // erros 
  function tratarErro(msg) {
    if (msg.includes("Invalid login credentials")) {
      setErro("Email ou senha incorretos");
    } else if (msg.includes("Email not confirmed")) {
      setErro("Confirme seu email antes de entrar");
    } else if (msg.includes("For security purposes")) {
      setErro("Tenta novamente ");
    } else if (msg.includes("User already registered")) {
      setErro("Esse email já está cadastrado");
    } else {
      setErro("Erro inesperado. Tenta de novo");
    }
  }

  // sing up
  const handleSignUp = async () => {
    setLoading(true);
    setErro("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    setLoading(false);

    if (error) {
      tratarErro(error.message);
    } else {
      setErro("Conta criada! Verifique seu email");
      console.log(data);
    }
  };

  // login
  const handleLogin = async () => {
    setLoading(true);
    setErro("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      tratarErro(error.message);
    } else {
      console.log(data);
      navigate("/questionario"); // vai pro questionário
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-slate-950">

      {/* efeito do mouse */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          <span className="text-green-500">TerraMetric</span> Login
        </h1>

        <div className="space-y-5">

          {/* nome */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <img src="/account.png" className="w-5 h-5 mr-3 opacity-70"/>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* email */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <img src="/gmail.png" className="w-5 h-5 mr-3 opacity-70"/>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* senha */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3">
            <img src="/password.png" className="w-5 h-5 mr-3 opacity-70"/>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

        </div>

        {/* Erro */}
        {erro && (
          <p className="text-red-400 text-sm mt-4 text-center">
            {erro}
          </p>
        )}

        <div className="flex gap-4 mt-8">
          
          {/* sing up */}
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="flex-1 bg-green-600 hover:bg-green-700 transition py-3 rounded-lg text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Carregando..." : "Sign Up"}
          </button>

          {/* login */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Login"}
          </button>

        </div>

      </div>
    </section>
  );
}