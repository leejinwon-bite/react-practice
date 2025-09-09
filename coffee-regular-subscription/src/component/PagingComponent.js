


const PagingComponent = ({ pagingVariables, moveToList }) => {
  return (
    <div>
      {
        // 삼항 연산자를 활용.
        pagingVariables.hasPreviousPage ?
          <div
            onClick={() => moveToList({
              page: pagingVariables.prePage,
              size: pagingVariables.pageSize
            })}
          >Prev</div> :
          <></>
      }
      {
        pagingVariables.navigatepageNums.map(pageNum =>
          <div
            key={pageNum}
            onClick={() => moveToList({
              // map을 통해서 나온 숫자들은 onClick 함수의 pageNum에
              //  들어가서 저장이 되어있음. 그래서 눌르면 알아서 해당페이지로
              // 이동함.
              page: pageNum,
              size: pagingVariables.pageSize
            })}
          >{pageNum}</div>
        )
      }
      {
        pagingVariables.hasNextPage ?
          <div
            onClick={() => moveToList({
              page: pagingVariables.nextPage,
              size: pagingVariables.pageSize
            })}
          >Next</div> :
          <></>
      }
    </div>
  )
}
export default PagingComponent