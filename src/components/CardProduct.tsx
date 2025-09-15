export type ProductType = {
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;

}

interface Props {
  product: ProductType
}

export default function CardProduct({ product }: Props) {
  return (
    <div className="border rounded-lg max-w-xs">
      <img className="rounded-lg py-4" src={product.image} alt={product.name}/>
      <p>{product.name}</p>
      <p className="text-sm">{product.description}</p>
    </div>
  )
}