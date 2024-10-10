import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";

const ProductDetail = dynamic(()=> import('../../components/ProductDetails'), {
    loading:()=> <p>Loading Product Details...</p>,
    ssr:false
})

const ProductPage = () => {
    const router = useRouter();
    const { query } = router
    const { title, description, image, price } = query;
    if (!title || !description || !image || !price) {
        return <p>Product details are missing.</p>;
      }

    return(
        <div>
            <ProductDetail
                description={description as string}
                title={title as string}
                image={image as string}
                price={price as string}
            />
        </div>

    )
}
export default ProductPage;