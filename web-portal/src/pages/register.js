import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layouts/Default'

const registerPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  })

  const handleForm = (name, e) => {
    const value = e.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleRegister = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <div className="flex">
        <form onSubmit={handleRegister} className="mb-4 m-auto w-1/2">
          <div className="flex items-center mb-6">
            <div className="w-2/5 text-right mb-1 mb-0 pr-4">
              <label className="text-right mb-1 mb-0 pr-4" htmlFor="email">
                Email :
              </label>
            </div>
            <div className="w-3/5 text-black font-bold text-right mb-1 mb-0 pr-4">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="py-1 px-1 w-full"
                onChange={e => handleForm('email', e)}
                value={form.email}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/5 block text-right mb-1 mb-0 pr-4">
              <label className="pr-4" htmlFor="password">
                Password :
              </label>
            </div>
            <div className="w-3/5  block text-black font-bold text-right mb-1 mb-0 pr-4">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                className="py-1 px-1 w-full"
                onChange={e => handleForm('password', e)}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/5 block text-right mb-1 mb-0 pr-4">
              <label className="pr-4" htmlFor="firstName">
                First name :
              </label>
            </div>
            <div className="w-3/5  block text-black font-bold text-right mb-1 mb-0 pr-4">
              <input
                id="firstName"
                type="input"
                name="firstName"
                placeholder="First name"
                className="py-1 px-1 w-full"
                onChange={e => handleForm('firstName', e)}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/5 block text-right mb-1 mb-0 pr-4">
              <label className="pr-4" htmlFor="lastName">
                Last name :
              </label>
            </div>
            <div className="w-3/5  block text-black font-bold text-right mb-1 mb-0 pr-4">
              <input
                id="lastName"
                type="input"
                name="lastName"
                placeholder="Last name"
                className="py-1 px-1 w-full"
                onChange={e => handleForm('lastName', e)}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-2/5 block text-right mb-1 mb-0 pr-4">
              <label className="pr-4" htmlFor="phone">
                Phone :
              </label>
            </div>
            <div className="w-3/5  block text-black font-bold text-right mb-1 mb-0 pr-4">
              <input
                id="phone"
                type="input"
                name="phone"
                placeholder="Phone"
                className="py-1 px-1 w-full"
                onChange={e => handleForm('phone', e)}
              />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="block text-black font-bold mb-1 mb-0 pr-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="mb-4">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default registerPage
