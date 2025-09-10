export default function FormLogin() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-orange-600 p-10 rounded-lg shadow-lg text-white w-100">
        <h2>Login</h2>
        <form method="post">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Usuário
            </label>
            <input
              className="w-full p-2 rounded-md text-black"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Senha
            </label>
            <input
              className="w-full p-2 rounded-md text-black"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </section>
  )
}