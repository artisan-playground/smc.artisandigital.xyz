import Link from 'next/link'
import { useQuery } from '@apollo/client'
import LayoutAdmin from '../../../components/Layouts/Admin'
import { GET_USERS } from '../../../graphql/query/user'

const userIndexPage = () => {
  const { data } = useQuery(GET_USERS)
  return (
    <LayoutAdmin>
      <div>
        <div>
          <Link href="/login">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create User
            </button>
          </Link>
        </div>

        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">first name</th>
                <th className="px-4 py-2">last name</th>
                <th className="px-4 py-2">email</th>
                <th className="px-4 py-2">phone</th>
              </tr>
            </thead>
            <tbody>
              {data?.getUsers.map((d, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2">{d.firstName}</td>
                    <td className="border px-4 py-2">{d.lastName}</td>
                    <td className="border px-4 py-2">{d.email}</td>
                    <td className="border px-4 py-2">{d.phone}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default userIndexPage
