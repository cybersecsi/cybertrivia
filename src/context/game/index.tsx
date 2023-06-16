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
  const gameBoard: IGameBoard = Object.entries(questions).reduce(
    (acc: IGameBoard, value: [string, IBaseGameQuestion[]]) => {
      const categoryQuestions: IGameQuestionWithId[] = value[1].map((q: IBaseGameQuestion) => {
        return {
          ...q,
          status: 'pending',
          id: 2,
        };
      });
      acc[value[0]] = categoryQuestions;
      return acc;
    },
    {},
  );
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
