import { syncopate } from './fonts';
import Image from 'next/image';
import hero from './assets/hero.png';
import { Button } from '@/components/ui/button';
import {
  Pencil2Icon,
  MagnifyingGlassIcon,
  ArchiveIcon,
  FigmaLogoIcon,
  CodeIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className='flex flex-col sm:items-center justify-center px-4 mt-6 sm:mt-16'>
        <h1
          className={`uppercase text-[1.675rem] leading-8  sm:text-3xl md:text-5xl sm:text-center max-w-5xl ${syncopate.className}`}
        >
          Elevate your brand with our elegant webcraft
        </h1>
        <p className='sm:max-w-3xl sm:text-center mt-2 text-slate-900  dark:text-slate-100 tracking-normal text-base sm:text-lg'>
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
        <div className='h-64 sm:h-96 w-full sm:w-10/12 mt-4 rounded-md bg-slate-700 object-cover'>
          <Image
            src={hero}
            alt='Hero Image'
            className='h-full rounded-md object-cover w-full'
          />
        </div>
      </main>
      <div className='py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              Process
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              From Vision to Reality
            </p>
            <p className='mt-6 text-base sm:text-lg sm:leading-8 dark:text-slate-300 text-gray-600 '>
              Step into our development process where ideas become remarkable
              product. With a methodical approach, we guarantee your project’s
              success.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <Pencil2Icon className='h-6 w-6 text-white' />
                  </div>
                  Interview
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  We will conduct an interview and getting as much information
                  as we can from the client. Our goal is to learn about the
                  business, industry and their target audience.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-white' />
                  </div>
                  Market Research
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  Understanding about the industry of the business. We are going
                  to research what their local competition is. It can give us
                  perspective about the industry.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <ArchiveIcon className='h-6 w-6 text-white' />
                  </div>
                  Collecting Assets
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  Collecting resources and quality content that to be needed in
                  the website. Things like images, copywriting, logo, reviews,
                  videos, audio files etc..
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <FigmaLogoIcon className='h-6 w-6 text-white' />
                  </div>
                  Design
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  After collecting information and resources we will design the
                  website using our specific tools. In designing, We will
                  include, wireframe and prototype.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <CodeIcon className='h-6 w-6 text-white' />
                  </div>
                  Development
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  Once the design is approved by the client, the development
                  comes into action. We will start to code the website and
                  giving it a life. This involves a lot of coding and testing.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 dark:text-white text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <RocketIcon className='h-6 w-6 text-white' />
                  </div>
                  Deployment
                </dt>
                <dd className='mt-2 text-base leading-7 dark:text-slate-300 text-gray-600'>
                  When everything’s has been thoroughly tested and meet the
                  client’s expectation, it’s time to launch the website and
                  unveil to the waiting public!
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 my-4 mb-10'>
        <div className='relative isolate overflow-hidden bg-slate-950  px-6 py-16 shadow-3xl sm:rounded-2xl'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx='512'
              cy='512'
              r='512'
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#c775d6' />
                <stop offset='1' stopColor='#2328c2' />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto max-w-2xl text-center '>
            <h2 className='text-2xl font-bold tracking-tight text-white sm:text-4xl'>
              Let’s Connect and Build Together
            </h2>
            <p className='mt-6 text-base sm:text-lg leading-8 text-gray-300'>
              We’re excited to hear about your project and discuss how we can
              help you achieve your goals. Our team is here to assist you every
              step of the way.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6 '>
              <a
                href='#'
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Contact Us
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-white'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <a
              target='__blank'
              href='https://www.facebook.com/profile.php?id=100095239324549'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Facebook</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
                />
              </svg>
            </a>

            <a
              target='__blank'
              href='https://github.com/thedevco'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-center text-base text-gray-400'>
              &copy; {currentYear} TheDev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
