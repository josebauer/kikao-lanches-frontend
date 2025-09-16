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
      <img className="rounded-lg h-60 w-full" src={product.image} alt={product.name} />
      <div className="p-5">
        <div className="flex items-center items-center justify-between mb-2">
          <p>{product.name}</p> 
          <p className="text-green-600 font-bold text-lg price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      <p className="text-sm">{product.description}</p>
      </div>
    </div>
  )
}