import { useEffect, useMemo } from 'react';
import { useGame } from '@/context/game';
import { IGameQuestionWithId } from '@/types';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Spinner } from '@/components';

const Board = () => {
  const { gameBoard } = useGame();
  const navigate = useNavigate();

  const punteggio: number = useMemo(() => {
    if (!gameBoard) {
      return 0;
    }
    return Object.entries(gameBoard).reduce((acc: number, v: [string, IGameQuestionWithId[]]) => {
      const categoryPoints = v[1]
        .filter((q: IGameQuestionWithId) => q.status === 'correct')
        .map((q: IGameQuestionWithId) => q.points);
      return acc + categoryPoints.reduce((partialSum, a) => partialSum + a, 0);
    }, 0);
  }, [gameBoard]);

  useEffect(() => {
    if (!gameBoard) {
      navigate('/');
    }
  }, [gameBoard]);

  if (!gameBoard) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner size='80' color='rgb(225 29 72)' />
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-${Object.keys(gameBoard).length} gap-2`}>
        {Object.keys(gameBoard).map((category: string) => {
          return (
            <div className='flex flex-col gap-2'>
              <div className='trivia-card bg-cyan-700 text-white'>{category}</div>
              {gameBoard[category].map((question: IGameQuestionWithId) => {
                const styleMapping = {
                  pending: 'bg-sky-300 hover:bg-sky-500 text-white',
                  correct: 'bg-emerald-500 hover:bg-emerald-600 text-white',
                  incorrect: 'bg-rose-500 hover:bg-rose-700 text-white',
                };
                return (
                  <Link to={`/question/${question.id}`}>
                    <div className={`trivia-card hover:underline ${styleMapping[question.status]}`}>
                      {question.points} <BsArrowRight />
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1 className='title text-cyan-900 text-center font-semibold mt-8'>
        Punteggio Totale: {punteggio}
      </h1>
    </>
  );
};

export default Board;
