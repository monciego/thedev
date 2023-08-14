import { ModeToggle } from '@/components/darkmode-toggle';
import { syncopate } from './fonts';

export default function Home() {
  return (
    <main className='flex h-screen gap-4 items-center justify-center '>
      <h1 className={`uppercase text-5xl ${syncopate.className}`}>thedev</h1>
      <ModeToggle />
    </main>
  );
}
