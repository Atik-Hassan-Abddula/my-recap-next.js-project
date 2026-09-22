import React from 'react';
import ProductCard from '../Components/ProductCard';

const getProducts = async()=>{
    const resolve = await fetch('http://localhost:5000/products')
    return resolve.json()
}

const ProductPage =async () => {
    const Product = await getProducts()
    return (
        <div>
            <h1>Product Page {Product.length} </h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    Product.map(Product=> <ProductCard key={Product.id} Product={Product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductPage;