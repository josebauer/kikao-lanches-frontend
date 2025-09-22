import Image from "next/image";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;

}

interface Props {
  product: ProductType
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="hover: hover:cursor-pointer shadow-md my-4 rounded-lg max-w-xs h-100">
      <Image className="rounded-lg h-60 w-full" src={product.image} alt={product.name} width={100} height={60} />
      <div className="p-5">
        <div className="flex items-center items-center justify-between mb-2">
          <p className="font-bold text-lg">{product.name}</p> 
          <p className="text-green-600 font-bold text-lg price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      <p className="text-sm font-normal">{product.description}</p>
      </div>
    </div>
  )
}