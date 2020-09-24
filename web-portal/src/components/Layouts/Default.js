import { Header } from '../Header/Header'

const Layout = ({ children }) => {
  return (
    // <div className="flex md:flex-row-reverse flex-wrap">
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
