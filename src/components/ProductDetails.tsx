import React from 'react';
import Image from 'next/image';

type ProductDetailProps = {
  title: string;
  description: string;
  image: string;
  price: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ title, description, image, price }) => {
  return (
    <div className="flex justify-center items-center mt-12 p-4">
      <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Product Image */}
        <div className="flex-1 p-4">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-green-600">${price}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;