const ContentWrapper = ({children}) => {
  return (
      <>
        <div className="max-w-[1200px] m-auto">
          {children}
        </div>
      </>
  )
}

export default ContentWrapper