"use client";

import { useRouter } from "next/navigation";
import './navegationBar.css'
//import { Home, LogOut } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">N</div>
        <span className="text-dark">Nebrija</span>
        <span className="text-blue">Social</span>
      </div>

      <div className="buttons">
        <button className="navbar-icon-btn" 
          onClick={handleLogout} title="Cerrar sesión">
          Salir
        </button>
        <button className="navbar-icon-btn"
          onClick={()=>router.push("/user")}> 
            Perfil
        </button>
      </div>
    </nav>
  );
}
