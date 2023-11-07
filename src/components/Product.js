import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsDash, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  const { id, title, price, image, category } = product;
  return (
    <article>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition duration-200">
        <div className="flex items-center justify-center w-full h-full">
          <figure className="w-[200px] mx-auto flex justify-center items-center">
            <img 
              src={image} alt={title}
              className="max-h-[160px] group-hover:scale-105 transition duration-300" 
            />
          </figure>
          {/* buttons */ }
          <div className="absolute flex flex-col items-center justify-center p-2 transition-all duration-300 opacity-0 top-6 -right-11 gap-y-2 group-hover:right-5 group-hover:opacity-100">
            <button className="">
              <div className="flex items-center justify-center w-8 h-8 text-white bg-red-500">
                <BsPlus className='text-2xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className="flex items-center justify-center w-8 h-8 bg-white text-primary drop-shadow-xl">
              <BsEyeFill className='' />
            </Link>
          </div>
        </div>
      </div>
      {/* Category, title and price */}
      <div className="">
        <div className="text-sm text-gray-500 capitalize">{category}</div>
        <Link to={`/product/${id}`} className="text-primary">
          <h3 className="mb-1 font-semibold">{title}</h3>
        </Link>
        <div className="font-semibold text-red-500">£ {price}</div>
      </div>
    </article>
  );
};

export default Product;
