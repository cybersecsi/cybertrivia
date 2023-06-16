import { createContext, useContext, useState } from 'react';
import { IBaseGameQuestion, IGameBoard, IGameQuestionWithId } from '@/types';
import { questions } from '@/config';

interface ProviderInterface {
  gameBoard: IGameBoard;
  setQuestionResult: (
    question: { category: string; id: number },
    result: 'correct' | 'incorrect',
  ) => void;
}

const GameContext = createContext<ProviderInterface | null>(null);

const initialGameBoard = (): IGameBoard => {
  const gameBoard: IGameBoard = {};
  let currentId = 1;
  for (const category of Object.keys(questions)) {
    gameBoard[category] = [];
    for (const question of questions[category]) {
      gameBoard[category].push({
        ...question,
        status: 'pending',
        id: currentId,
      });
      currentId += 1;
    }
  }
  return gameBoard;
};

const GameProvider = ({ children }: any): any => {
  const [gameBoard, setGameBoard] = useState<IGameBoard>(initialGameBoard());

  const setQuestionResult = (
    question: { category: string; id: number },
    result: 'correct' | 'incorrect',
  ) => {
    setGameBoard((currentGameBoard: IGameBoard) => {
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
