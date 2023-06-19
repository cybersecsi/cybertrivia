import { createContext, useContext, useEffect, useState } from 'react';
import { IGameBoard, IGameQuestionWithId } from '@/types';
import { LOCAL_STORAGE_KEY } from '@/config';
import { getObjectFromStorage, saveObjectToStorage } from '@/utils/helper';

interface ProviderInterface {
  initFromStorage: () => void;
  initFromData: (data: IGameBoard) => void;
  gameBoard: IGameBoard | undefined;
  setQuestionResult: (
    question: { category: string; id: number },
    result: 'correct' | 'incorrect',
  ) => void;
}

const GameContext = createContext<ProviderInterface | null>(null);

const GameProvider = ({ children }: any): any => {
  const [gameBoard, setGameBoard] = useState<IGameBoard>();

  const initFromData = (data: IGameBoard) => {
    // If not in local storage then take from default
    const gBoard: IGameBoard = {};
    let currentId = 1;
    for (const category of Object.keys(data)) {
      gBoard[category] = [];
      for (const question of data[category]) {
        gBoard[category].push({
          ...question,
          status: 'pending',
          id: currentId,
        });
        currentId += 1;
      }
    }
    setGameBoard(gBoard);
    saveObjectToStorage(LOCAL_STORAGE_KEY, gBoard);
  };

  const initFromStorage = () => {
    const objData = getObjectFromStorage(LOCAL_STORAGE_KEY);
    setGameBoard(objData as IGameBoard);
  };

  useEffect(() => {
    if (gameBoard) {
      saveObjectToStorage(LOCAL_STORAGE_KEY, gameBoard);
    }
  }, [gameBoard]);

  const setQuestionResult = (
    question: { category: string; id: number },
    result: 'correct' | 'incorrect',
  ) => {
    setGameBoard((currentGameBoard: IGameBoard | undefined) => {
      if (!currentGameBoard) {
        return {};
      }
      return {
        ...currentGameBoard,
        [question.category]: currentGameBoard[question.category].map((q: IGameQuestionWithId) => {
          if (q.id === question.id) {
            return {
              ...q,
              status: result,
            };
          } else {
            return q;
          }
        }),
      };
    });
  };

  return (
    <GameContext.Provider
      value={{
        initFromData,
        initFromStorage,
        gameBoard,
        setQuestionResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};

export { GameProvider, useGame };
