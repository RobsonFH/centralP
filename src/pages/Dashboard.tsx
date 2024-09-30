import { Button } from '@/components/ui/button';
import logoCifrao from '../assets/cifrao.svg';
import logoCerto from '../assets/certo.svg';
import logoBilhete from '../assets/bilhete.svg';
import logoRepetir from '../assets/repetir.svg';
import logoCaixa from '../assets/caixa.svg';
import logoPapel from '../assets/Papel.svg';
import logoCotacoes from '../assets/cotacoes.svg';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';




export function Dashboard() {
  return (
    <div className='w-[900px] flex flex-col gap-10'>
      <button className='w-[60px] h-[60px] bg-neutral-50'>*</button>
      <div className="bg-neutral-50 p-5">
        <span>Nome: <strong>Roberto Fernando da Silva</strong></span>
        <div>
          <p>Saldo:</p>
          <p>R$960,00</p>
        </div>
      </div>
      <div className='flex h-[120px] bg-neutral-50'>
        <div className='w-[120px] flex items-center justify-center bg-neutral-50'><img src={logoCifrao} /></div>
        <Button className='rounded-none flex-1 h-full text-4xl font-bold'>VENDER</Button>
      </div>

      <div className='grid grid-cols-2 gap-11'>

        <Dialog>
          <div className='flex h-[120px] bg-neutral-50'>
            <div className='w-[120px] flex items-center justify-center bg-red-500'><img src={logoBilhete} /></div>
            <DialogTrigger asChild>
              <Button className='rounded-none flex-1 h-full text-4xl font-bold bg-neutral-50 text-neutral-600'>Bilhetes</Button>
            </DialogTrigger>
          </div>

          <DialogContent className='bg-neutral-300 max-w-[900px] h-[534px]'>
            <span className='text-center'>24/09</span>
            <div className='h-full grid grid-cols-2 gap-x-20 gap-y-4'>

              <div className='flex h-16'>
                <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'>17:00</span>
                <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Nacional</Button>
              </div>
              <div className='flex h-16'>
                <span className='bg-blue-700 w-[120px] h-full flex justify-center items-center'>17:00</span>
                <Button className='h-full w-full rounded-none bg-neutral-50 text-neutral-600'>Nacional</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>


        <div className='flex h-[120px] bg-neutral-50'>
          <div className='w-[120px] flex items-center justify-center bg-cyan-300'><img src={logoCerto} /></div>
          <Button className='rounded-none flex-1 h-full text-4xl font-bold  bg-neutral-50 text-neutral-600'>Resultado</Button>
        </div>
        <div className='flex h-[120px] bg-neutral-50'>
          <div className='w-[120px] flex items-center justify-center bg-yellow-700'><img src={logoRepetir} /></div>
          <Button className='rounded-none flex-1 h-full text-4xl font-bold  bg-neutral-50 text-neutral-600'>Repetir</Button>
        </div>
        <div className='flex h-[120px] bg-neutral-50'>
          <div className='w-[120px] flex items-center justify-center bg-yellow-500'><img src={logoCaixa} /></div>
          <Button className='rounded-none flex-1 h-full text-4xl font-bold  bg-neutral-50 text-neutral-600'>Caixa</Button>
        </div>
        <div className='flex h-[120px] bg-neutral-50'>
          <div className='w-[120px] flex items-center justify-center bg-purple-700'><img src={logoPapel} /></div>
          <Button className='rounded-none flex-1 h-full text-4xl font-bold  bg-neutral-50 text-neutral-600'>Impressora</Button>
        </div>
        <div className='flex h-[120px] bg-neutral-50'>
          <div className='w-[120px] flex items-center justify-center bg-green-300'><img src={logoCotacoes} /></div>
          <Button className='rounded-none flex-1 h-full text-4xl font-bold  bg-neutral-50 text-neutral-600'>Cotações</Button>
        </div>
      </div>
    </div>


  );
}