import { Props } from './props'

export const Alert = (props: Props) => {
  const { children } = props

  return (
    <p className="alert_message">{children}</p>
  )
}