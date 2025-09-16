import cardapio from '@/data/cardapio.json'
import ProductCard from "@/components/ProductCard";

export default function menu() {
  return (
    <main>
      <h2 className='text-center mt-4'>Cardápio</h2>
      <section className='flex flex-wrap justify-center gap-4 mt-5 mb-20'>
        {cardapio.map((product) => ( 
          <ProductCard product={product} />
        ))}
      </section>
    </main>
  )
}