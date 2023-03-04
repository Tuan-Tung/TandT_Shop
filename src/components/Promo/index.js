import React from 'react'
import './style.css'

const Promo = () => {
    return (
        <div className="promo">
            <div className="row">
                <div className="promo__content">
                    <img src="https://res.cloudinary.com/dkcjgqwya/image/upload/v1677922976/3_dzppok.png?fbclid=IwAR0pLVrtQFUbyp3FtaHVZnMAek4YUR_lwwEmhVxbJCA4IAXH2j4FwbUlPog" alt="" />
                    <div className="promo__item">
                        <h2 className="promo__title">NEW</h2>
                        <h2 className="promo__decs">SHOES SPORT</h2>
                        <p>CHANGE LIVES INSTITUTIONS DIALOGUE</p>
                        <button className="button__item--new">Mua ngay</button>
                    </div>
                   
                </div>
                <div className="promo__content">
                    <img src="https://res.cloudinary.com/dkcjgqwya/image/upload/v1677922976/2_mkccwa.png?fbclid=IwAR3Ug1ELXF9tA5KVyVOQ1bE1qyyOD5D86-7N3bC_GryNKkCgfpYGwM3IUoo" alt="" />
                    <div className="promo__item ">
                        <h2 className="promo__title p--sale">SALE</h2>
                        <h2 className="promo__decs">UP TO 50% OFF</h2>
                        <p>PREVENTION SOCIAL RESPONSIBILITY</p>
                        <button className="button__item--sale">Mua ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo
