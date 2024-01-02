import React from 'react';
import BestSellHeading from './BestSellHeading';
import ProductArray from './ProductArray';
import BestSellProductStructure from './BestSellProductStructure';

function BestSell(props) {
    return (
        <section className='bestSell'>
            <BestSellHeading title={props.title} content={props.content} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bestSellMain">
                            {
                                props.arrayProduct.map((product,index)=> <BestSellProductStructure key={index} product={product}/> )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default BestSell;