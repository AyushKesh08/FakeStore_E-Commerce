import { useEffect, useState } from "react";
import Thumbnails from "../thumbnails/Thumbnails.jsx";
import { categoryList } from "./categories.js";
import './Categories.css'

function Categories({data}){

    let [state,setState] = useState(data)
    let [category,setCategory] = useState(categoryList)
    let [selKey,setSelKey] = useState([]);
    let [selCat,setSelCat] = useState([]);
    let [color,setColor] = useState('')

    function showCategoryData(next){
        setSelKey(next.subCategories)
    }

    function showFilteredData(nestCat){
        setSelCat(nestCat.subLabel.toLowerCase())
    }

    return (
        <div id="main">
            <div id="catBox">
                {
                    category.map((next)=>(
                        <div className="incatBox" onClick={()=>{showCategoryData(next)}} >
                            <img src={next.icon} /><br /><br />
                            <strong>{next.label}</strong>
                        </div>
                    ))
                }
            </div>
            <div id="catBox">
                {
                    selKey.map((nestCat)=>(
                        <div className="incatBox" onClick={()=>showFilteredData(nestCat)} >
                            <img src={nestCat.subIcon} /><br /><br />
                            <strong>{nestCat.subLabel}</strong>
                        </div>
                    ))
                }
            </div>
            
            <br /><br />

            <div id="realData">
                {
                    Object.entries(state).map(([key,val])=>{
                        return Object.entries(val).map(([key1,val1])=>{
                            if(key1 == selCat){
                                return val1.map((realData)=>
                                    ( 
                                        <div className="maincard">
                                            <div className="card">
                                                <img src={realData.image}  />
                                            </div>
                                            <div className="cardBody">
                                                <h3 style={{color:'ActiveText'}} ><strong>{realData.name}</strong></h3>
                                                <span style={{}}><strong>Price : </strong>{realData.price}</span><br />
                                                <span style={{}}><strong>Quantity : </strong>{realData.quantity}</span><br />
                                                <span style={{}}><strong>Discount : </strong>{realData.discount}%</span><br />
                                                <span style={{}}><strong>Brand : </strong>{realData.brand}</span><br />
                                                <span style={{}}><strong>Descryption : </strong>{realData.description}</span>
                                            </div>
                                        </div>
                                    )
                                )
                            }else
                                return null;
                        })
                    })
                }
            </div>
        </div>
    )
}

export default Categories;