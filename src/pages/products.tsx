import { useTheme } from "@/context/ThemeContext";
import { ProductsType } from "@/types";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProductTypeProps {
    products: ProductsType[]
}

const Products: React.FC<ProductTypeProps> = ({products}) =>{
    const { theme } = useTheme()
    const router = useRouter();
    const handleClickProduct = (product:ProductsType) => {
        router.push({
            pathname:`products/${product.id}`,
            query:{ ...product },
        })
    }
    return (
        <div style={{
            width:'100%',
            padding:5,
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
            color: theme === 'light' ? '#000000' : '#ffffff',
        }}>
        <h1 className="p-2 text-4xl">Product List</h1>
            <div style={{ display: 'flex',justifyContent:"center", flexWrap: 'wrap', gap: '20px' }}>
            {products.map((product) => (
                <div key={product.id} style={{ width: '300px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', cursor:'pointer' }} onClick={()=>handleClickProduct(product)}>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill" 
                        objectFit="contain" 
                    />
                </div>
                </div>
            ))}
            </div>
      </div>
    )
}

export const getServerSideProps:GetServerSideProps<ProductTypeProps> = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const products: ProductsType[] = await res.json();

    return {
        props:{
            products,
        }
    }
}
export default Products;