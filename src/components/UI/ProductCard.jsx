import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='p-5'>
        <Link to={`products/${product.id}`}>
          <img src={product.image} alt="" className='w-[50%]' />
          <h1 className='text-left my-2'>{product.title}</h1>
          <p className="text-[#f57224] text-[18px] text-left">${product.price}</p>
        </Link>
    </div>
  )
}

export default ProductCard