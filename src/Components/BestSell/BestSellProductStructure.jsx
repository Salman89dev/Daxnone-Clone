import React from 'react';

let BestSellProductStructure=(props)=> {

    return (
        <div className="bestSellSingle" >
            <img src={props.product.img} alt="" />
            <h6>{props.product.category}</h6>
            <h4>{props.product.title}</h4>
            <div className="bottomDiv">
                <div className="price">
                    <span>{props.product.actualPrice}</span><del>{props.product.discountedPrice}</del>
                </div>
                <div className="addToCart">
                    <a href="#">+ Add To Cart</a>
                </div>
            </div>
        </div>
    );
}

export default BestSellProductStructure;