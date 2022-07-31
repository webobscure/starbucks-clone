import React from 'react'

import Fetch from '../server/fetch'




export default function Menu() {
   

    return (
        <div className='container'>
            <div className="selectors">
                <div className="types">
                    <ul className='types-list'>
                        <li><button >Espresso drinks</button></li>
                        <li>Traditional coffee</li>
                        <li>Hot Chocolate</li>
                        <li>Frappuchino coffe</li>
                        <li>Cream Frappuchino without coffee</li>
                        <li>Fruit drinks</li>
                        <li>Bakery & deserts</li>
                        <li>Breakfest and lunch</li>
                    </ul>
                </div>
                <div className="size"></div>
            </div>
            <div className="menu">
                <Fetch />
            </div>
        </div>
    )
}
