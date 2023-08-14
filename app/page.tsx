import { syncopate } from './fonts';

export default function Home() {
  return (
    <main className='flex h-screen items-center justify-center '>
      <h1 className={`uppercase text-5xl ${syncopate.className}`}>thedev</h1>
    </main>
  );
}
