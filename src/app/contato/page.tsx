import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="relative">
        <iframe className="w-full h-screen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.264875699762!2d-50.396234563633584!3d-26.170114148059977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e70d8698ce2011%3A0xa76ae6fa489daa3b!2sKik%C3%A3o%20Lanches!5e0!3m2!1sen!2sbr!4v1758046560492!5m2!1sen!2sbr" loading="lazy"></iframe>

        <div className="shadow-lg absolute right-0 top-10 w-100 p-6 bg-white rounded-l-lg">
          <p className="text-2xl font-bold text-center black-high-contrast">Entre em contato</p>
          <form method="post">
            <div className="mb-4">
              <label className="block mb-2 mt-5 font-semibold" htmlFor="email">
                E-mail
              </label>
              <input
                className="w-full p-2 rounded-md text-orange-600 border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100"
                type="email"
                id="email"
                name="email"
                required
                />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="password">
                Assunto
              </label>
              <input
                className="w-full p-2 rounded-md text-black border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-200"
                type="password"
                id="password"
                name="password"
                required
                />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="message">
                Mensagem
              </label>
              <textarea name="message" id="message" className="w-full p-2 rounded-md text-black border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-200" rows={4} required>
              </textarea>
            </div>
            <button className="form-btn w-full border-2 border-white bg-green-600 p-2 rounded-md text-white hover:bg-white hover:text-green-600 hover:border-green-600 hover:font-semibold hover:cursor-pointer transition-colors">
              Enviar
            </button>
          </form>
        </div>

        <div className="contact bg-orange-600 absolute text-white left-0 top-50 w-80 p-6 rounded-r-lg pl-20">
          <Link href="tel:(47)3622-0000" className="flex gap-4" >
            <img src="/icons/phone.svg" alt="" width={30} />
            (47) 3622-0000
          </Link>

          <Link href="mailto:contato@kikao.com" className="flex gap-4">
            <img src="/icons/email.svg" alt="" width={30} />
            contato@kikao.com
          </Link>
        </div>
      </section>
    </main>
  )
}