import { IDataTypes } from "../types/Types"

export const RESULT: string = 'Restart'


export const questions: IDataTypes[] = [
    {
        title: 'React - this ...?',
        variables: ['library', 'framework', 'language'],
        current: 0
    },
    {
        title: 'component - this ...?',
        variables: ['function for return text', 'function for return jsx', 'function for nothing return '],
        current: 1
    },
    {
        title: "What it's useState?",
        variables: ['This is function for save data', 'This is global state', 'This is not necessary function'],
        current: 0
    },
    {
        title: "What it's Jsx?",
        variables: ['This is syntax javaScript code', 'This is name of function', 'This is syntax html code',],
        current: 2
    },
]

