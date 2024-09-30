import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = false;

  // Não está logado e quer acessar uma rota privada.
  if (!signedIn && isPrivate)  {
    return <Navigate to="/login" replace/>;
  }

  // Esta logado e quer acessar uma rota publica.
  if (signedIn && !isPrivate)  {
    return <Navigate to="/" replace/>;
  }

  return <Outlet />;
}