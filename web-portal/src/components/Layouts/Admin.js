import SideBar from './Sidebar'

const LayoutAdmin = ({ children }) => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <SideBar />
      <div className="w-full max-w-screen-xl mx-auto px-6">{children}</div>
    </div>
  )
}

export default LayoutAdmin
