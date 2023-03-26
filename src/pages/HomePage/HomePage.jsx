import React from 'react'
import Slider from "../../components/Slider/Slider"
import "./HomePage.scss"
import {Category} from ".."
import ProductList from "../../components/ProductList/ProductList"
import { useSelector, useDispatch } from 'react-redux'
import {fetchCategories, fetchProductsByCategory} from "../../store/categorySlice"


const HomePage = () => {
const dispatch = useDispatch()
const {data: categories, status: categoryStatus} = useSelector((state) => state.category)
  return (
    <div className='home-page' >
      <Slider/>
      <Category categories= { categories} status={categoryStatus} />
    </div>
  )
}

export default HomePage
