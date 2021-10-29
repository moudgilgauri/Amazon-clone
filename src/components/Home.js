import React from 'react'
import "../css/Home.css"
import myImage from "../images/home_container2.jpg"
import Product from './Product'
import lean_startup from "../images/lean_startup.jpg"
import zebronics from "../images/Zebronics.jpg"
import boult from "../images/Boult.jpg"
import tablet from "../images/Tablet.jpg"
import kattle from "../images/kattle.jpg"
import vCleaner from "../images/Vcleaner.jpg"
import A30 from "../images/A30.jpg"
import TV from "../images/TV.jpg"
export default function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={myImage} alt="" />
                <div className="home_row">
                   <Product title="This is lean learning" image={lean_startup} price={19.09} rating={5}/>
                   <Product title="Zebronics ZEB-FIT7220CH Smart Fitness Watch with Call Function via Built-in Speaker & Mic" image={zebronics} price={3099.00} rating={4}/>
                   <Product title="Boult Audio AirBass Propods TWS Earbuds with 24H Total Playtime, Type-C Fast Charging" image={boult} price={1199.00} rating={3}/>
                    
                </div>
                <div className="home_row">
                <Product title="Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch) Large Display, Slim Metal Body, Mystic Black" image={tablet} price={36999.00} rating={4}/>
                <Product title="Havells Aqua Plus 1.2 litre Double Wall Kettle / 304 Stainless Steel Inner Body " image={kattle} price={1250.00} rating={3}/>
                <Product title="Eureka Forbes Quick Clean DX Vacuum Cleaner with 1200 Watts Powerful Suction Control" image={vCleaner} price={2300} rating={4}/>
                <Product title="(Renewed) Samsung Galaxy A30 (Black, 4GB RAM, 64GB Storage) with Offer" image={A30} price={9990} rating={5}/>
                </div>
                <div className="home_row">
                <Product title="AmazonBasics 80cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)" image={TV} price={14990} rating={4}/>
                  
                </div>
            </div>
        </div>
    )
}