import Link from 'next/link';

type LogoProps = {};

const Logo = ({}: LogoProps): JSX.Element => {
  return <Link href={`/`}>Logo</Link>;
};

export default Logo;
