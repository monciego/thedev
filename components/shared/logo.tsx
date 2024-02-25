import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

type LogoProps = {};

const Logo = ({}: LogoProps): JSX.Element => {
  return (
    <Link href={`/`}>
      <Image className='w-12' src={logo} alt='thedev logo' />
    </Link>
  );
};

export default Logo;
