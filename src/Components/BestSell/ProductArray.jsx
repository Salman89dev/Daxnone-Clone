import React from 'react';
import productImage01 from "./../../assets/images/ProductImage/product01.webp"
import productImage02 from "./../../assets/images/ProductImage/product02.webp"
import productImage03 from "./../../assets/images/ProductImage/product03.webp"
import productImage04 from "./../../assets/images/ProductImage/product04.webp"
import productImage05 from "./../../assets/images/ProductImage/product05.webp"

let ProductArray=[
    {
        img:productImage01,
        title:"hello Easy Spot Chair.",
        category:"Chair",
        actualPrice:"250.00",
        discountedPrice:"",
    },

    {
        img:productImage03,
        title:"Golden Easy Spot Chair.",
        category:"Chair",
        actualPrice:"210.00",
        discountedPrice:"230.000",
    },
    {
        img:productImage04,
        title:"Golden Easy Spot Chair.",
        category:"Chair",
        actualPrice:"210.00",
        discountedPrice:"",
    },
    {
        img:productImage05,
        title:"Golden Easy Spot Chair.",
        category:"Chair",
        actualPrice:"210.00",
        discountedPrice:"230.00",
        isNew:"New",
    },
]


export default ProductArray;