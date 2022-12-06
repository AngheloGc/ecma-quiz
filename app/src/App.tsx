import { Alert, Button, Header, Question } from './components'
import './app.css'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { QUESTIONS } from './constants'

function App() {
  const formRef = useRef<HTMLFormElement>(null)
  const [showAlert, setShowAlert] = useState(false)
  const [questions, setQuestions] = useState(QUESTIONS)
  const [results, setResults] = useState<number | null>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    setShowAlert(false)

    if(formRef.current) {
      const isValid = formRef.current.checkValidity()
      console.log(isValid)
      if(!isValid) {
        return setShowAlert(true)
      }
      const formData = new FormData(formRef.current)
      const answers = Array.from(formData.values())
      setQuestions(prevState => answers.map((answer, index) => {
        return {
          content: prevState[index].content,
          answers: prevState[index].answers,
          correctAnswer: prevState[index].correctAnswer,
          currentAnswer: Number(answer)
        }
      }))
    }
  }

  useEffect(() => {
    const correctAnswers = questions.filter(question => question.correctAnswer === question.currentAnswer)
    setResults(correctAnswers.length)
  }, [questions])

  return (
    <main className="main_wrapper">
      <Header />
      <form className="form_wrapper" ref={formRef} onSubmit={submitHandler} noValidate>
        {questions.map((question, index) => (
          <Question
            key={index}
            answers={question.answers}
            order={index + 1}
            correctAnswer={question.correctAnswer}
            currentAnswer={question.currentAnswer}
          >{question.content}</Question>
        ))}
        <Button
          label="Completar test"
        />
        {showAlert
          ? <Alert>⁉️ Es obligatorio completar todas las preguntas. Verifique sus respuestas.</Alert>
          : null
        }
        {results
          ? results > 4
            ? <Alert>🎉 ¡Felicitaciones! Su puntaje es de {results} puntos.</Alert>
            : <Alert>😢 Su puntaje es de {results} punto(s). Hay que mejorar.</Alert>
          : null
        }
      </form>
    </main>
  )
}

export default App