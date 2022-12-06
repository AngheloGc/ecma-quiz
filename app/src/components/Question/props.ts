export interface Props {
  answers: AnswerProps[]
  currentAnswer: number | null
  correctAnswer: number
  order: number
  children: React.ReactNode
}

export interface AnswerProps {
  label: string
  value: number
}