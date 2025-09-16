import cardapio from '../data/cardapio.json'
import Slide from "./Slide";


export default function ProductsSection() {
  return (
    <section className="p-8 font-bold text-2xl align-center">
      <h2 className="mb-4 text-center">Produtos em Destaque</h2>
      <Slide cardapio={cardapio} />
    </section>
  )
}