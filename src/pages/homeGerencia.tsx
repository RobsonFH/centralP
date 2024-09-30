import { Button } from "@/components/ui/button";
import logoCambista from '../assets/cambista.svg';
import logoGerencia from '../assets/gerencia.svg';
import logoCaixa from '../assets/caixa.svg';
import logoCotacoes from '../assets/cotacoes.svg';
import logoBilhete from '../assets/bilhete.svg';
import logolancamento from '../assets/lancamento.svg';
import logoContas from '../assets/contas.svg';
import logoResultado from '../assets/resultado.svg';
import logoAuditoria from '../assets/auditoria.svg';
import logoVenda from '../assets/venda.svg';
import logoLoteria from '../assets/loteria.svg';





export function Gerencia() {


    return (
        <div className='w-[900px] flex flex-col gap-10'>
            <button className='w-[60px] h-[60px] bg-neutral-50'>*</button>


                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoCambista} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Cambista</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoGerencia} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Gerente</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoCotacoes} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Saldos</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoCaixa} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Caixa</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoBilhete} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Bilhetes</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logolancamento} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Lançamentos</Button> 
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoContas} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Prestar Contas</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoResultado} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Resultados</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoAuditoria} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Auditoria</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoVenda} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Venda</Button>
                    </div>
                    <div className='flex h-16'>
                        <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'><img src={logoLoteria} ></img></span>
                        <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Loteria</Button>
                    </div>













        </div>
    );

}