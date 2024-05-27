import React from 'react'
import quiz from './../modules/questions.module.scss'
import { IDataProps } from '../types/PropsTypes'
import { onClickVariant } from '../hooks/Hooks'



const Question: React.FC<IDataProps> = ({ question, step, setStep, widthStep, correct, setCorrect }) => {
    //-----------------------------------------
    const handleClick = (i: number, step: number) => {
        onClickVariant(i, step)
        setStep(step + 1)
        if (i === question.current) {
            setCorrect(correct + 1)
        }
    }
    //-----------------------------------------

    return (
        <div className={quiz.questionBody}>
            <div className={quiz.questionContainer}>
                <div className={quiz.progressRow}>
                    <div style={{
                        width: `${widthStep}%`,
                        transition: 'all 0.3s ease 0.3s,'
                    }} className={quiz.progress}></div>
                </div>
                <h1 className={quiz.questionTitle}>{question.title}</h1>
                <ul className={quiz.answerList}>
                    {
                        question.variables.map((el, i) => (
                            <li onClick={() => handleClick(i, step)} key={i} className={quiz.answerItem}>{el}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Question;