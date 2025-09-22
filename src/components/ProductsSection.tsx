import { ProductType } from "./ProductCard";
import Slide from "./Slide";

interface Props {
  title: string
  cardapio: ProductType[]
}

export default function ProductsSection({ title, cardapio }: Props) {
  return (
    <section className="p-8 font-bold text-2xl align-center">
      <h2 className="mb-4 text-center">{title}</h2>
      <Slide cardapio={cardapio} />
    </section>
  )
}