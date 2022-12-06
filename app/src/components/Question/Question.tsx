import { Props } from './props'
import './styled.css'

export const Question = (props: Props) => {
  const { answers, order, children, currentAnswer, correctAnswer } = props

  return (
    <section className="question_wrapper">
      <div className="question_header"><span>{order}.-</span> <div>{children}</div></div>
      <div className="question_options">
        {answers.map((answer, index) => (
          <div className="question_option" key={index}>
            <input
              type="radio"
              name={`question_${order}`}
              id={`question_${index}_${order}`}
              value={answer.value}
              required
            />
            <label htmlFor={`question_${index}_${order}`}>{answer.label}</label>
          </div>
        ))}
      </div>
      {currentAnswer
        ? (currentAnswer === correctAnswer)
          ? <div className="question_success_message">✅ ¡Respuesta correcta!</div>
          : <div className="question_error_message">❌ Respuesta incorrecta</div>
        : null
      }
    </section>
  )
}