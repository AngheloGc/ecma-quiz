import './styled.css'
import { Props } from './props'

export const Button = (props: Props) => {
  const { label } = props

  return (
    <button className="button" type="submit">{label}</button>
  )
}