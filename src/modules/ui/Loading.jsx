const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen absolute top-0 left-0">
      {/* fa-spin gira y con fa-5x se agranda */}
      <i className="fa-solid fa-spinner fa-spin fa-5x"></i>
    </div>
  )
}

export default Loading
