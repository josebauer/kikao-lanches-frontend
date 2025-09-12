export default function Banner() {
  return (
    <section className="bg-orange-600 background-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-32 lg:py-24">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              A mais tradicional lanchonete da região!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white italic sm:text-xl/8">
              Desde 1976 servindo os melhores lanches da região de Canoinhas/SC
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="btn rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center gap-2 m-0"
              >
                <a href="">
                  Entrar em contato
                </a>
                <img src="icons/wpp.webp" alt="test" width={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}