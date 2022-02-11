export type Option = {
  quizOptionId: string;
  text: string;
};

export type Quiz = {
  quizId: string;
  question: string;
  options: Option[];
};
