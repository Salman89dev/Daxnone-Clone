import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import PremiumHome from './Components/PremiumHome/PremiumHome';
import BestSell from './Components/BestSell/BestSell';
import WinterDiscount from './Components/WinterDiscount/WinterDiscount';
import ProductArray from './Components/BestSell/ProductArray';
import AllProductArray from './Components/AllProduct/AllProductArray';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  var newObj;
  let [data,showData]=useState(true)
  let [dataObj,showObjData]=useState({})

  var newFun=(newObj)=>{
    console.log(newObj)
    showObjData((newObj)=>
    {
      console.log(newObj)
        return{
            newObj,
        }

    })

    showData(false)

  }


  return (
    <>
      <Header/>

      {
        data ? <div>
        <HeroSection/>
        <PremiumHome />
        <BestSell newFun={newFun} arrayProduct={ProductArray} title="Best Sell" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
        <WinterDiscount/>
        <BestSell arrayProduct={AllProductArray} title="All Products" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
  
        <Footer/> 
        </div>:
        <div className="productData">
        <h1>Title:{data.title} </h1>
        <h1>Price:{data.price}  </h1>
      </div>

      }


    </>
  )
}

export default App
