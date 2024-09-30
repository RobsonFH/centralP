import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Login() {
  const [codigo, setCodigo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState(false);

  function handleInputCodigo(event: React.ChangeEvent<HTMLInputElement>){
    const somenteNumeros = event.target.value.replace(/[^0-9]/g, '');
    setCodigo(somenteNumeros);
  }

  function handleSubmit() {
    setErro(!erro);
  }

  return (
    <div className="w-[900px] h-[534px] bg-slate-50 rounded-xl flex overflow-hidden">
      <div className="bg-orange-linear-gradient flex items-center justify-center">
        <h1 className="text-4xl text-center font-bold text-neutral-50 font-serif">CENTRAL PREMIAÇÕES</h1>
      </div>
      <div className="flex items-center flex-col mt-16 mb-7 mx-[120px] justify-between">
        <h2 className="font-medium text-xl text-center">Digite os dados do seu acesso para entrar na plataforma</h2>
        <form className="flex flex-col w-[350px] h-[320px] flex-1 mt-10 justify-between">
          <div className="flex flex-col gap-6">
            <Input type="text" placeholder="Código" error={erro} value={codigo} onChange={handleInputCodigo} maxLength={5}/>
            <Input type="text" placeholder="Usuário" error={erro} value={usuario} onChange={e => setUsuario(e.target.value)}/>
            <Input type="password" placeholder="Senha" error={erro} value={senha} onChange={e => setSenha(e.target.value)}/>
          </div>
          <div className="flex flex-col gap-1">
            {erro && <span className="text-red-500 font-medium">Erro no login. verifique as informações e tente novamente</span>}
            <Button type="button" className="h-16 first-line:font-bold text-xl" onClick={handleSubmit}>Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}