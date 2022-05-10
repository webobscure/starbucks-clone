import React from 'react'

export default function Menu() {
    return (
        <div className='container'>
            <div className="selectors">
                <div className="types">
                    <ul className='types-list'>
                        <li>Espresso drinks</li>
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
            <div className="items">
                <div className="drinks">
                    <div className="coffee">
                        <p className="coffee-name">f</p>
                        <img src="" alt="" className="coffee-image" />
                        <p className="coffee-price"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
