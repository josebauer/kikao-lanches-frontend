import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-center p-6 flex flex-col items-center gap-4">
      <div className="flex items-center">
        <img src="/hamburger.svg" alt="Hamburger" width={40} />
        <p className="font-semibold text-white ml-2">Kikão Lanches</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Link href="/cardapio" className="text-white border-2 border-transparent p-2 hover:border-white rounded-lg">Cardapio</Link>
        <Link href="/sobre-nos" className="text-white border-2 border-transparent p-2 hover:border-white rounded-lg">Sobre nós</Link>
        <Link href="/contato" className="text-white border-2 border-transparent p-2 hover:border-white rounded-lg">Contato</Link>
      </div>
      <p className="text-white">Desenvolvido por José Henrique Bauer</p>
    </footer>
  )
}