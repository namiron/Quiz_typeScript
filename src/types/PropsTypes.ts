import { IDataTypes, IQuestionTypes } from "./Types";

export interface IDataProps {
    questions?: IDataTypes,
    question: IQuestionTypes,
    step: number,
    setStep: (num: number) => void,
    widthStep: number,
    correct: number,
    setCorrect: (num: number) => void
}

export interface IResultProps {
    correct: number,
    questions?: IDataTypes,
}