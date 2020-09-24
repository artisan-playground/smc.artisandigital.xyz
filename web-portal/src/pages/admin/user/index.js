import Link from 'next/link'
import LayoutAdmin from '../../../components/Layouts/Admin'

const userIndexPage = () => {
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
                <th className="px-4 py-2">name</th>
                <th className="px-4 py-2">name</th>
                <th className="px-4 py-2">name</th>
                <th className="px-4 py-2">name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">name</td>
                <td className="border px-4 py-2">name</td>
                <td className="border px-4 py-2">name</td>
                <td className="border px-4 py-2">name</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default userIndexPage
