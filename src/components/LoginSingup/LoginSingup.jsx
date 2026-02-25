import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginSingup() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //  SIGN UP
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      alert("Erro: " + error.message);
    } else {
      alert("Conta criada com sucesso!");
      console.log(data);
    }
  };

  // LOGIN
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erro: " + error.message);
    } else {
      alert("Login realizado com sucesso!");
      console.log(data);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-slate-950">
      
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          <span className="text-green-500">TerraMetric</span> Login
        </h1>

        <div className="space-y-5">

          {/* Nome */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <img
              src="/account.png"
              alt="Usuário"
              className="w-5 h-5 mr-3 opacity-70 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <img
              src="/gmail.png"
              alt="Email"
              className="w-5 h-5 mr-3 opacity-70 pointer-events-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Senha */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
            <img
              src="/password.png"
              alt="Senha"
              className="w-5 h-5 mr-3 opacity-70 pointer-events-none"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>

        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleSignUp}
            className="flex-1 bg-green-600 hover:bg-green-700 transition py-3 rounded-lg text-white font-semibold"
          >
            Sign Up
          </button>

          <button
            onClick={handleLogin}
            className="flex-1 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </div>

      </div>
    </section>
  );
}
