import Image from 'next/image';
import founderImage from '../assets/jericho-bantiquete.jpg';

export default function About() {
  return (
    <div className='relative mb-16'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2  lg:gap-24 lg:items-start '>
        <div className='relative mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          <div className='pt-10 sm:pt-16 lg:pt-20'>
            <h2 className='text-3xl text-gray-900 dark:text-white font-extrabold tracking-tight sm:text-4xl'>
              On a mission to empower startups and small businesses
            </h2>
            <div className='mt-6 text-gray-500 dark:text-gray-300 space-y-6'>
              <p className='text-lg'>
                <strong>TheDev</strong> is a small but ambitious venture
                dedicated to empowering small businesses and startups through
                affordable, high-quality software solutions. Founded by Jericho
                Bantiquete, I am deeply committed to delivering results that
                help entrepreneurs and enterprises thrive in today’s competitive
                landscape.
              </p>
              <p className='text-base leading-7'>
                While TheDev currently operates with a solo team, I have a
                vision for the future that includes expanding and bringing in
                talented professionals to further enhance our capabilities. This
                commitment to growth ensures that we continue to provide
                top-notch solutions and support to our clients as we evolve.
              </p>
              <p className='text-base leading-7'>
                My mission is clear: to bridge the technology gap by offering
                tailored software solutions that are accessible to businesses of
                all sizes. I believe that innovation and efficiency should not
                be out of reach for small enterprises.
              </p>
            </div>
          </div>
        </div>
        <div className='relative mt-12 sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen -z-10'
          >
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-slate-300 dark:text-slate-800'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            <div className='relative  pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
              <Image
                className='absolute inset-0 h-full w-full object-cover'
                src={founderImage}
                alt='Jericho P. Bantiquete'
              />
              <div className='absolute inset-0 bg-indigo-300 mix-blend-multiply' />
              <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-700/5 opacity-90' />
              <div className='relative px-8'>
                <div></div>
                <blockquote className='mt-8'>
                  <div className='relative text-lg font-medium text-white md:flex-grow'>
                    <svg
                      className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                      aria-hidden='true'
                    >
                      <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative'>
                      My mission is to make innovation and efficiency accessible
                      to businesses of all sizes through tailored software
                      solutions, bridging the technology gap.
                    </p>
                  </div>

                  <footer className='mt-4'>
                    <p className='text-base font-semibold text-indigo-200'>
                      <a
                        href='https://github.com/monciego'
                        target='__blank'
                        className='hover:underline'
                      >
                        Jericho Bantiquete
                      </a>
                      , Founder at TheDev
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
