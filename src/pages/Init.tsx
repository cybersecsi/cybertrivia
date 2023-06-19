import { Dropzone } from '@/components';
import { LOCAL_STORAGE_KEY } from '@/config';
import { useGame } from '@/context/game';
import { keyInStorage } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { parse } from 'yaml';

const NewGameContent = () => {
  const { initFromData } = useGame();
  const navigate = useNavigate();

  const onReadYaml = (data: string) => {
    initFromData(parse(data));
    navigate('/board');
  };

  return (
    <div className='card'>
      <Dropzone onRead={onReadYaml} />
    </div>
  );
};

const Init = () => {
  const { initFromStorage, gameBoard } = useGame();
  const navigate = useNavigate();
  const [isStartNewTrivia, setIsStartNewTrivia] = useState<boolean>(false);
  const pastGameAvailable = keyInStorage(LOCAL_STORAGE_KEY);

  const continueGame = () => {
    initFromStorage();
    navigate('/board');
  };

  useEffect(() => {
    if (gameBoard) {
      navigate('/board');
    }
  }, [gameBoard]);

  return (
    <>
      {isStartNewTrivia ? (
        <NewGameContent />
      ) : (
        <div className='flex gap-4 items-center justify-center'>
          <button className='button-common' onClick={() => setIsStartNewTrivia(true)}>
            Nuova Partita
          </button>
          {pastGameAvailable && (
            <button className='button-green' onClick={continueGame}>
              Continua Partita
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Init;
