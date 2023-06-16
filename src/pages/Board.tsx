import { useMemo } from 'react';
import { useGame } from '@/context/game';
import { IGameQuestionWithId } from '@/types';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Board = () => {
  const { gameBoard } = useGame();

  const punteggio: number = useMemo(() => {
    return Object.entries(gameBoard).reduce((acc: number, v: [string, IGameQuestionWithId[]]) => {
      const categoryPoints = v[1]
        .filter((q: IGameQuestionWithId) => q.status === 'correct')
        .map((q: IGameQuestionWithId) => q.points);
      return acc + categoryPoints.reduce((partialSum, a) => partialSum + a, 0);
    }, 0);
  }, [gameBoard]);

  return (
    <>
      <div className={`grid grid-cols-${Object.keys(gameBoard).length} gap-2`}>
        {Object.keys(gameBoard).map((category: string) => {
          return (
            <div className='flex flex-col gap-2'>
              <div className='trivia-card bg-cyan-700 text-white'>{category}</div>
              {gameBoard[category].map((question: IGameQuestionWithId) => {
                const styleMapping = {
                  pending: 'bg-sky-300 hover:bg-sky-500 text-white hover:underline',
                  correct: 'bg-emerald-500 text-white',
                  incorrect: 'bg-rose-500 text-white',
                };
                return (
                  <>
                    {question.status === 'pending' ? (
                      <Link to={`/question/${question.id}`}>
                        <div className={`trivia-card ${styleMapping[question.status]}`}>
                          {question.points} <BsArrowRight />
                        </div>
                      </Link>
                    ) : (
                      <div className={`trivia-card ${styleMapping[question.status]}`}>
                        {question.points}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
      <h1 className='title text-cyan-900 text-center font-semibold mt-4'>
        Punteggio Totale: {punteggio}
      </h1>
      <div></div>
    </>
  );
};

export default Board;
