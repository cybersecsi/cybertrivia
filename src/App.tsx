import AppRouter from '@/AppRouter';
import { GameProvider } from '@/context/game';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'tippy.js/dist/tippy.css'; // optional

const App = () => {
  return (
    <GameProvider>
      <RouterProvider router={AppRouter} />
      <Toaster position='bottom-left' />
    </GameProvider>
  );
};

export default App;
