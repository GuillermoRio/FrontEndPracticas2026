import api from "@/app/api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import './login.css'

export const Login = () => {

  const router = useRouter()
    
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/login", {email,password,});
      const { token } = res.data;

      document.cookie = `token=${token}; path=/; max-age=86400`;
      console.log("Login correcto");

      router.push("/");

    } catch (error) {
      setError("Incorrect credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="auth-card">
    <h2>Login</h2>

    <input
      placeholder="name@nebrija.es"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button 
      onClick={handleLogin} 
      disabled={loading}
    >
      {loading ? "Loading..." : "Submit"}
    </button>

    {error && <p>{error}</p>}
  </div>
);
};