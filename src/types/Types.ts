

export interface IQuestionTypes {
    title: string,
    variables: Array<string>,
    current: number
}


export type IDataTypes = IQuestionTypes

export type IProgressType = (pr: number, q: IQuestionTypes[]) => number