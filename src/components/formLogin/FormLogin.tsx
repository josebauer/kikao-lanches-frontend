import styles from "./formLogin.module.scss";

export default function FormLogin() {
  return (
    <section className={`${styles.formLogin} flex justify-center items-center h-screen`}>
      <div className="bg-white p-10 rounded-lg shadow-lg text-orange-600 w-100">
        <p className="text-2xl font-bold text-center black-high-contrast">Login <br /> Área administrativa</p>
        <br />
        <hr />
        <form method="post">
          <div className="mb-4">
            <label className="block mb-2 mt-5 font-semibold" htmlFor="username">
              Usuário
            </label>
            <input
              className="w-full p-2 rounded-md text-orange-600 border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-100"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full p-2 rounded-md text-black border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 bg-gray-200"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button className="login-btn mt-4 w-full border-2 border-white bg-green-600 p-2 rounded-md text-white hover:bg-white hover:text-green-600 hover:border-green-600 hover:font-semibold hover:cursor-pointer transition-colors">
            Entrar
          </button>
        </form>
      </div>
    </section>
  )
}