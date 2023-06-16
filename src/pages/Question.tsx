import { Spinner } from '@/components';
import { useGame } from '@/context/game';
import { IGameQuestionWithId, IGameQuestionWithIdAndCategory } from '@/types';
import { sleep } from '@/utils/helper';
import { useEffect, useState } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gameBoard, setQuestionResult } = useGame();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
  const [question, setQuestion] = useState<IGameQuestionWithIdAndCategory>();

  const goHome = () => {
    navigate('/');
  };

  const loadQuestion = async () => {
    if (!id) {
      goHome();
      return;
    }
    const category = Object.keys(gameBoard).find((category: string) =>
      gameBoard[category].find((q: IGameQuestionWithId) => q.id === parseInt(id)),
    );
    if (!category) {
      goHome();
      return;
    }
    const questionWithId = Object.values(gameBoard[category]).find(
      (q: IGameQuestionWithId) => q.id === parseInt(id),
    );
    if (!questionWithId) {
      goHome();
      return;
    }
    setQuestion({
      ...questionWithId,
      category: category,
    });
    if (questionWithId.status !== 'pending') {
      setIsAnswerVisible(true);
    }
    await sleep(500);
    setIsLoading(false);
  };

  const setAnswer = async (result: 'correct' | 'incorrect') => {
    if (!question) {
      return;
    }
    setIsLoading(true);
    setQuestionResult({ category: question.category, id: question.id }, result);
    await sleep(500);
    goHome();
  };

  useEffect(() => {
    if (gameBoard) {
      loadQuestion();
    }
  }, [gameBoard]);

  if (isLoading || !question) {
    return (
      <div className='flex items-center justify-center'>
        <Spinner size='80' color='rgb(225 29 72)' />
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl'>Domanda</h1>
      <div className='content'>
        <p>{question.question}</p>
      </div>
      {isAnswerVisible ? (
        <>
          <div className='flex flex-col gap-2 mt-2 animate__animated animate__fadeInLeftBig'>
            <h1 className='text-3xl'>Risposta</h1>
            <div className='content bg-orange-100 text-white flex flex-col gap-2'>
              {question.answers.map((answer: string) => (
                <p>{answer}</p>
              ))}
            </div>
            {question.status === 'pending' ? (
              <div className='w-full grid grid-cols-2 gap-2 mt-2'>
                <button
                  onClick={() => setAnswer('correct')}
                  className='button-green justify-center'
                >
                  Risposta Corretta
                </button>
                <button
                  onClick={() => setAnswer('incorrect')}
                  className='button-red justify-center'
                >
                  Risposta Errata
                </button>
              </div>
            ) : (
              <button
                onClick={goHome}
                className={`mt-2 gap-2 justify-center font-semibold uppercase ${
                  question.status === 'correct' ? 'button-green' : 'button-red'
                }`}
              >
                {question.status === 'correct' ? 'Risposta Corretta' : 'Risposta Errata'}
                <BsArrow90DegLeft />
              </button>
            )}
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsAnswerVisible(true)}
          className='button-common w-1/2 m-auto items-center justify-center font-semibold text-center uppercase mt-2'
        >
          Mostra la risposta
        </button>
      )}
    </div>
  );
};

export default Question;
