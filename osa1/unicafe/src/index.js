import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return 'No feedback given';
  }

  return (
    <table>   
      <tbody> 
        <Statistic text = 'good' value = {props.good} />
        <Statistic text = 'neutral' value = {props.neutral} />
        <Statistic text = 'bad' value = {props.bad} />
        <Statistic text = 'all' value = {props.all} />
        <Statistic text = 'average' value = {props.overall} />
        <Statistic text = 'positive' value = {props.good/props.all*100 + " %"} />
      </tbody>
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  const [overall, setOverall] = useState([])

  const handleGoodClick = () => {
    setAll(all.concat('good'))
    setGood(good + 1)
    setOverall(overall.concat(1))
  }

  const handleNeutralClick = () => {
    setAll(all.concat('neutral'))
    setNeutral(neutral + 1)
    setOverall(overall.concat(0))
  }

  const handleBadClick = () => {
    setAll(all.concat('bad'))
    setBad(bad + 1)
    setOverall(overall.concat(-1))
  }  

  return (
    <div>
      <h1>give feedback</h1>  
      <Button onClick = {handleGoodClick} text = 'good'/>
      <Button onClick = {handleNeutralClick} text = 'neutral'/>
      <Button onClick = {handleBadClick} text = 'bad'/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all.length} overall = {overall.reduce((a,b) => a + b, 0)/overall.length}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
