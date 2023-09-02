import { syncopate } from './fonts';
import Image from 'next/image';
import hero from './assets/hero.png';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex flex-col sm:items-center justify-center px-4 mt-6 sm:mt-16'>
      <h1
        className={`uppercase text-2xl sm:text-3xl md:text-5xl sm:text-center max-w-5xl ${syncopate.className}`}
      >
        Elevate your brand with our elegant webcraft
      </h1>
      <p className='sm:max-w-3xl sm:text-center mt-2 text-slate-900  dark:text-slate-100 tracking-normal text-sm sm:text-lg'>
        They&rsquo;re searching for you, and our expertise is here to ensure
        they easily discover you in the digital landscape. Let us be your
        compass to success.
      </p>
      <div className='flex my-6 gap-4'>
        <Button className='uppercase font-semibold ' size={`xl`}>
          Projects
        </Button>
        <Button
          className='uppercase font-semibold'
          size={`xl`}
          variant={`outline`}
        >
          Contact Us
        </Button>
      </div>
      <div className='h-64 sm:h-96 w-full sm:w-10/12 mt-4  rounded-md bg-slate-700 object-cover'>
        <Image
          src={hero}
          alt='Hero Image'
          className='h-full rounded-md object-cover w-full'
        />
      </div>
    </main>
  );
}
