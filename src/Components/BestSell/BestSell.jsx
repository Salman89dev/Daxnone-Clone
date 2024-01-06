import React from 'react';
import BestSellHeading from './BestSellHeading';
import ProductArray from './ProductArray';
import BestSellProductStructure from './BestSellProductStructure';

function BestSell(props) {
    // console.log(props.newFun)
    let productClicked=(e)=>
    {
        if(e.target.classList.contains("bestSellSingle")){
             let title=document.querySelector(".bestSellSingle h4").innerHTML
             let price=document.querySelector(".bestSellSingle span").innerHTML
             let img=document.querySelector(".bestSellSingle img").src
             var newObj={
                title:title,
                price:price,
                img:img
             }
             props.newFun(newObj)
            }
        }
    
    return (
        <section className='bestSell'>
            <BestSellHeading title={props.title} content={props.content} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bestSellMain" onClick={(e)=>
                        {
                            productClicked(e);
                        }}>
                            {
                                props.arrayProduct.map((product,index)=> <BestSellProductStructure  key={index} product={product}/> )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default BestSell;