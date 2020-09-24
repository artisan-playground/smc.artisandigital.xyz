import Head from 'next/head'
import Layout from '../components/Layouts/Default'
import Link from 'next/link'

const handleLogin = e => {
  e.preventDefault()
}

const Home = () => {
  return (
    <Layout>
      <div className="max-w rounded overflow-hidden">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="pr-4" for="username">
              Username
            </label>
            <input id="username" name="username" />
          </div>

          <div className="mb-4">
            <label className="pr-4" for="password">
              Password
            </label>
            <input id="password" name="username" />
          </div>

          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </form>

        <div className="mb-4">
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
