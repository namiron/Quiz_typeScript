import React from 'react'
import quiz from './../modules/questions.module.scss'
import Question from './Quastion'
import Result from './Result'
import { questions } from '../command/constant'
import { widthProgressQuestion } from '../hooks/Hooks'


const Questionnaire: React.FC = () => {
    //-------------------------------
    const [step, setStep] = React.useState<number>(0)
    const [correct, setCorrect] = React.useState<number>(0)

    const question = questions[step]
    const widthStep = widthProgressQuestion(step, questions)
    //-------------------------------

    return (
        <div className={quiz.questionnaire}>
            {step !== questions.length
                ?
                (<Question question={question} step={step} setStep={setStep} widthStep={widthStep} correct={correct} setCorrect={setCorrect} />)
                :
                (<Result correct={correct} />)
            }

        </div>
    )
}

export default Questionnaire;
