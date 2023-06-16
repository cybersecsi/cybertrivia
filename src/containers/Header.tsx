import CyberTriviaLogo from '@/assets/logo.png';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex flex-col gap-4 m-auto'>
      <img src={CyberTriviaLogo} className='h-32 w-auto' />
      <Tippy content='CyberTrivia' placement='bottom'>
        <Link to='/'>
          <h1 className='title text-cyan-900'>CyberTrivia</h1>
        </Link>
      </Tippy>
    </header>
  );
};

export default Header;
