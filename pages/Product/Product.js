import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Categories from '../../components/Categories/Categories'
import fig1 from './1.png'

function Product() {
    return (
        <div>
            <NavBar/>
            <Categories/>
            <img src={fig1}></img>
        </div>
    )
    
}

export default Product

