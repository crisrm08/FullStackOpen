import { useEffect, useState } from 'react'
import Buttons from './Buttons'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
  
    const newTotal = good + neutral + bad;
    setTotal(newTotal);

    const newAverage = (good - bad) / newTotal;
    setAverage(newAverage);

    const newPositive = (good / newTotal) * 100;
    setPositive(newPositive);

  }, [good, neutral, bad]); 

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons onClick={handleGood} text={"good"} />
      <Buttons onClick={handleNeutral} text={"neutral"} />
      <Buttons onClick={handleBad} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App
