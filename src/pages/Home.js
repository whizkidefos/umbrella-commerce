import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products)

  // Get unique categories: Men's OR Women's clothing
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || "women's clothing";
  });

  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              return (
                <Product key={product.id} product={product} />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
