import './index.css'

type TrafficLightProps = {
  color: string
  isTurnedOn: boolean
} & React.ComponentProps<'div'>

function TrafficLight({ color, isTurnedOn, ...rest }: TrafficLightProps) {
  return (
    <div
      className={`traffic-light bg-${color} light-${isTurnedOn ? 'on' : 'off'}`}
      {...rest}
    ></div>
  )
}

export { TrafficLight }
