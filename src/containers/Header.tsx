import CyberTriviaLogo from '@/assets/logo.png';

const Header = () => {
  return (
    <header className='flex flex-col gap-4 m-auto'>
      <img src={CyberTriviaLogo} className='h-32 w-auto' />
      <h1 className='title text-cyan-900'>CyberTrivia</h1>
    </header>
  );
};

export default Header;
