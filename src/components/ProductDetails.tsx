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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        gap: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <Image
            src={image} 
            alt={title} 
            width={300} 
            height={400} 
            objectFit="cover"
            style={{ borderRadius: '8px' }}
          />
        </div>

        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>{description}</p>
          </div>

          <p style={{ fontWeight: 'bold', fontSize: '24px', color: '#333' }}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
