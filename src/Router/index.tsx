import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/Dashboard";
import { AuthGuard } from "./AuthGuard";
import { Login } from "@/pages/Login";
import  Resultados   from "@/pages/Resultados";
import Caixa from "@/pages/Caixa";
import Cotacao from "@/pages/Cotacao";
import { Gerencia } from "@/pages/homeGerencia";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas publicas */}
        <Route element={<AuthGuard isPrivate={false}/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/caixa" element={<Caixa />} />
          <Route path="/cotacao" element={<Cotacao />} />
          <Route path="/homeGerencia" element={<Gerencia />} />
          
          
        </Route>

        {/* Rotas privadas */}
        <Route element={<AuthGuard isPrivate={false}/>}>
          <Route path="/" element={<Dashboard />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}