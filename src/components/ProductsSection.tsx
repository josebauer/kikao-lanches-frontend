import CardProduct from "./CardProduct";
import cardapio from '../data/cardapio.json'

export default function ProductsSection() {
  return (
    <section className="p-8 font-bold text-2xl">
      <h2 className="mb-4">Produtos em Destaque</h2>
      <div className="flex gap-4 overflow-x-auto">
        {Array.isArray(cardapio) && cardapio.map((product) => (
        <CardProduct product={product} />
        ))}
      </div>
    </section>
  )
}