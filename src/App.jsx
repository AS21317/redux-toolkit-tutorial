import { useState } from 'react'

import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
import Reward from './components/Reward'
import Intrest from './components/Intrest'
import Admin from './components/Admin'

function App() {
  const [value,setValue] = useState(0)

  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=> state.bonus.points)
  const reward = useSelector(state=> state.reward.reward)
  const intrest = useSelector(state=> state.intrest.intrest)

  return (
    <div className='App'>

     
      <h4>App</h4>
      <h2>Current Amount: {amount}  </h2>
     
      <h3>Total Points:{points}  </h3>
      <h3>Total Rewards:{reward} </h3>
      <h3>Total Intrest:{intrest} </h3> 
      <Account value={value} setValue={setValue} />
      <Bonus  />
      <Reward value={value} />
      {/* <Intrest value={value} /> */}
      <Admin/>
      
    </div>
  )
}

export default App
