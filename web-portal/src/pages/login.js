import Layout from '../components/Layouts/Default'
import Link from 'next/link'

const handleLogin = e => {
  e.preventDefault()
}

const login = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <form onSubmit={handleLogin} className="m-auto w-1/2">
          <div className="flex items-center mb-6">
            <div className="w-2/5 text-right mb-1 mb-0 pr-4">
              <label className="pr-4" for="email">
                Email
              </label>
            </div>

            <div className="w-3/5 text-black font-bold text-right mb-1 mb-0 pr-4">
              <input id="email" className="py-1 px-1 w-full" type="input" name="email" />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/5 text-right mb-1 mb-0 pr-4">
              <label className="pr-4" for="password">
                Password
              </label>
            </div>
            <div className="w-3/5 text-black font-bold text-right mb-1 mb-0 pr-4">
              <input id="password" className="py-1 px-1 w-full" type="password" name="password" />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>

          <hr className="mb-4" />

          <div className="mb-4">
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default login
