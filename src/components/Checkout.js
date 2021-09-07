import React from 'react'
import "./Checkout.css"
import { connect } from 'react-redux';

import Subtotal from './Subtotal'

function Checkout(props) {
    console.log(props)
    const {title1} = props.btitle.basket.title
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
                <h2>
                    Item title is {title1}
                </h2>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                
            </div>
        </div>
    )
}




const mapStateToProps = (state) =>{
    console.log("state: ",state)
    return{
        btitle:state
    }
}








// export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
export default connect(mapStateToProps,null)(Checkout)