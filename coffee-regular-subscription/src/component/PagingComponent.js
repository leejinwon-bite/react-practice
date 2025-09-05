


const PagingComponent = ({ pagingVariables, moveToList }) => {
  return (
    <div>
      {
        // 삼항 연산자를 활용.
        pagingVariables.hasPreviousPage ?
          <div
            onClick={() => moveToList({
              page: pagingVariables.hasPreviousPage,
              size: pagingVariables.navigatePages
            })}
          >Prev</div> :
          <></>
      }
      {/* {
        serverData.pageNumList.map(pageNum =>
          <div
            key={pageNum}
            className={`m-2 p-2 w-12 text-center rounded shadow-md text-white
              ${serverData.current === pageNum ? 'bg-gray-500' : 'bg-blue-400'}`}
            onClick={() => movePage({
              page: pageNum,
              size: serverData.pageRequestDTO.size
            })}
          >{pageNum}</div>
        )
      }
      {
        serverData.next ?
          <div
            className="m-2 p-2 w-16 text-center font-bold text-blue-400"
            onClick={() => movePage({
              page: serverData.nextPage,
              size: serverData.pageRequestDTO.size
            })}
          >Next</div> :
          <></>
      } */}
    </div>
  )
}
export default PagingComponent