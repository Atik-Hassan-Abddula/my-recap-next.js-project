import React from 'react';

const ProductId = async({params}) => {
    const{ProductsId}= await params

    
    return (
        <div>
            <h2>Product Id</h2>
        </div>
    );
};

export default ProductId;