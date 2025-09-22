import cardapio from '@/data/cardapio.json'
import ProductsSection from '@/components/ProductsSection';

export default function menu() {

  const hamburgers = cardapio.filter(product => product.category === "Lanches")
  const additional = cardapio.filter(product => product.category === "Adicionais")
  const sideDishes = cardapio.filter(product => product.category === "Acompanhamentos")

  return (
    <main id="main-content">
      <h1 className='text-3xl font-bold ml-20 mt-10 text-orange-600'>Cardápio</h1>

      <ProductsSection title='Lanches' cardapio={hamburgers} />
      <ProductsSection title='Acompanhamentos' cardapio={sideDishes} />
      <ProductsSection title='Adicionais' cardapio={additional} />
    </main>
  )
}