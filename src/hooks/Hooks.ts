import { IProgressType, IQuestionTypes } from "../types/Types";

export const onClickVariant = (index: number, el: number): void => {
    console.log('el:', el, 'index:', index,);

}

export const widthProgressQuestion: IProgressType = (steps: number, questions: IQuestionTypes[]) => {
    const progress = Math.round(steps / questions.length * 100)
    return progress
}

