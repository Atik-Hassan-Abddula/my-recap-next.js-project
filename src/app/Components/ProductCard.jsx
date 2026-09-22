import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({Product}) => {
    const {title,description,image,id}= Product
    return (
       <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
    
    <p>{description}</p>
    <div className="justify-end card-actions">
     <Link href={`/Products/${id}`}>
      <button className="btn btn-primary">Visit Now</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default ProductCard;