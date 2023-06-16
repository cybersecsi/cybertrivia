export interface IBaseGameQuestion {
  question: string;
  answer: string;
  points: number;
}

export interface IGameQuestion extends IBaseGameQuestion {
  status: 'pending' | 'correct' | 'incorrect';
}

export interface IGameQuestionWithId extends IGameQuestion {
  id: number;
}

export interface IGameQuestionWithIdAndCategory extends IGameQuestionWithId {
  category: string;
}

export interface IGameBoard {
  [category: string]: IGameQuestionWithId[];
}
