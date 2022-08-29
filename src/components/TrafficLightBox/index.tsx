import { TrafficLight } from './TrafficLight'
import { LightColor } from '../../models/LightColor'

import './index.css'

type TrafficLightBoxProps = {
  lightColor: string
}
const colors = [LightColor.Red, LightColor.Yellow, LightColor.Green]

function TrafficLightBox(props: TrafficLightBoxProps) {
  const { lightColor } = props

  return (
    <div className="traffic-color-box">
      {colors.map((color) => (
        <TrafficLight
          key={color}
          color={color}
          isTurnedOn={color === lightColor}
        />
      ))}
    </div>
  )
}

export { TrafficLightBox }
