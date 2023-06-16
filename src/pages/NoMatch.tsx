import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='content'>
      <div className='inset-0 text-center flex flex-col justify-center p-8'>
        <div>
          <h5 className='text-sky-600 font-bold'>Errore 404</h5>
          <h3 className='text-5xl font-bold py-4'>Pagina non trovata.</h3>
          <h4>Controlla la URL nella barra degli indirizzi oppure torna alla homepage.</h4>
          <Link to={'/'}>
            <button className='text-white rounded bg-cyan-600 p-3 mt-4 hover:bg-cyan-800'>
              Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
