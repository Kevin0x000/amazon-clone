import React from 'react'
import Rating from '@material-ui/lab/Rating';
import { connect } from 'react-redux';
import addToBasket from "../redux/actions/index"
import './Product.css'


function Product(props) {
   
    const { title, price, img, rating, show } = props
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating value={rating} />
                </div>
            </div>
            <img src={img} alt=""></img>
            <button onClick={()=>show(title)}>Add to basket</button>
        </div>
    )
}

//need return value, which is a OBJECT
const mapDispatchToProps = (dispatch) => {
    return {
        show: (title) => dispatch(addToBasket(title)),
    }
}


//enhance Product component
//Product is "sender", need connect second parameters
export default connect(null, mapDispatchToProps)(Product)