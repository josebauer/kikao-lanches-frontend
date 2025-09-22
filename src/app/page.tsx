import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";
import Link from "next/link";
import cardapio from '@/data/cardapio.json'

export default function Home() {

  const featuredProducts = cardapio.filter(product => product.featured === true)

  return (
    <main id="main-content">
      <Banner />
      <ProductsSection title="Produtos em destaque" cardapio={featuredProducts} />
      <div className="mb-10 text-center">
        <Link href="/cardapio" className="btn p-3 text-orange-600 font-bold border-2 rounded-md border-orange-600 hover:bg-orange-600 hover:text-white">Ver cardápio completo</Link>
      </div>
    </main>
  );
}
