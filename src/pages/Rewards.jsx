import Reward from 'components/Reward'
import React from 'react'
import { useState } from 'react'

export default function Rewards() {
    const [counter ,setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            hello rewards/rewind :D
            <button onClick={handleCounter}>+</button>
            <Reward count={counter}/>
        </div>
    )
}
