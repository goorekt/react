import "./categories.scss"
import Category from "../category-item/category-item";

import React from 'react'

 const Categories = ({categories}) => {
  return (
    <div className='categories-container'>
    {categories.map((category) => (
        <Category category={category} key={category.id}></Category>
    ))
}</div>
  )
}

export default Categories
