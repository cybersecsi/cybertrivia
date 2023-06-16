import Spinner from '@/components/Spinner';
import { useEffect } from 'react';

interface ILoadingProps {
  blur?: boolean;
}

const Loading = (props: ILoadingProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add('overflow-hidden');

    return document.documentElement.classList.remove('overflow-hidden');
  }, []);

  return (
    <div
      className={`w-full h-full flex justify-start items-center absolute bottom-0 left-0 z-[999] ${
        props.blur ? 'blur-bg' : 'bg-slate-900'
      }`}
    >
      <div className='bg-white m-auto rounded-md overflow-hidden p-6 shadow-lg'>
        <Spinner size='60' color='rgb(225 29 72)' />
      </div>
    </div>
  );
};

export default Loading;
