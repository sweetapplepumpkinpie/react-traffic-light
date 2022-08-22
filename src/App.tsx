import { useEffect, useState } from 'react'

import { TrafficLightBox } from './components/TrafficLightBox'
import { LightColor } from './models/LightColor'

import './App.css'

const TIME_STEPS = [1, 2, 4]
const TIME_INTERVAL = 1000
const colors = [LightColor.Red, LightColor.Yellow, LightColor.Green]

function App() {
  const [firstLightIndex, setFirstLightIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLightIndex((firstLightIndex) => (firstLightIndex + 1) % 3)
    }, TIME_INTERVAL * TIME_STEPS[firstLightIndex])

    return () => clearTimeout(timeout)
  }, [firstLightIndex])

  return (
    <div className="main-box">
      <TrafficLightBox lightColor={colors[firstLightIndex]} />
      <TrafficLightBox lightColor={colors[(firstLightIndex + 2) % 3]} />
    </div>
  )
}

export default App
