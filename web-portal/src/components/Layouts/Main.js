const Main = ({ children }) => {
  return (
    <div className="flex md:flex-row-reverse flex-wrap">
      <div className="w-full md:w-1/4 bg-gray-400 p-4 text-center text-gray-700">{children}</div>
    </div>
  )
}

export default Main
