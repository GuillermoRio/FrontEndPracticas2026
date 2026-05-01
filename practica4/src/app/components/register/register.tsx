import api from "@/app/api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import './register.css'

export const Register = () => {

  const router = useRouter()
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      const { token } = res.data;
      document.cookie = `token=${token}; path=/; max-age=86400`;

      console.log("Registered");
      router.push("/");

    } catch (error) {
      setError("Error, U couldnt register");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="auth-card">
    <h2>Register</h2>

    <input
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

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
      onClick={handleRegister} 
      disabled={loading}
    >
      {loading ? "Loading..." : "Register"}
    </button>

    {error && <p>{error}</p>}
  </div>
);
};