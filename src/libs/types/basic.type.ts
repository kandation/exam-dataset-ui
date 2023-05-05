export interface ISubContent {
  id: number;
  type: QuestionType;
  data: ISubContent[] | string;
}

export enum QuestionType {
  QUESTION,
  INSTRUCTION,
}
