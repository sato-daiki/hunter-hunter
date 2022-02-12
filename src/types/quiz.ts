export type Option = {
  optionId: string;
  text: string;
};

export type Quiz = {
  quizId: string;
  question: string;
  options: Option[];
};
