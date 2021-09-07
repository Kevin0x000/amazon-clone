import React from 'react'
import './Home.css'
import bg from "../../src/700VastOfNight.jpg"
import Product from './Product'
import p1 from "../../src/Lean.png"
import p2 from "../../src/earphone.jpg"
import p3 from "../../src/camera.jpeg"
import p4 from "../../src/chopper.jpg"
import p5 from "../../src/chair.jpg"
import p6 from "../../src/wide.jpeg"

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={bg} alt="" />

                <div className="home__row">
                    <Product
                        title="The lean startup"
                        price={19.9}
                        img={p1}
                        rating={2}
                    />
                    <Product
                        title="Smart Ear Phone"
                        price={59.9}
                        img={p2}
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        title="Camera Set"
                        price={2059.9}
                        img={p3}
                        rating={5}
                    />
                    <Product
                        title="Chooper"
                        price={30}
                        img={p4}
                        rating={3}
                    />
                    <Product
                        title="Office Chair (Black)"
                        price={89.99}
                        img={p5}
                        rating={5}
                    />

                </div>
                <div className="home__row">
                    <Product
                        title="34 32:9 Monitor HD"
                        price={1099}
                        img={p6}
                        rating={4}
                    />

                </div>
            </div>
        </div>
    )
}
