
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

// 그대로 복사해서 가져온거임. 

const getParam = (param, defaultValue) => {
  // !param은 param이 null, undefined, 빈 문자열 등 falsy한 값일 때
  //  true가 됩니다. >>>> !null=true.
  // 따라서 param이 없거나 falsy한 값일 경우 defaultValue를 반환합니다.
  if (!param) {
    return defaultValue
  }
  // parseInt를 사용하여 문자열을 정수로 변환합니다.
  // url의 쿼리 파라미터는 문자열로 전달되므로, 숫자로 변환이 필요합니다.
  return parseInt(param)
}

const CustomMove = () => {

  const navigate = useNavigate()
  // useSearchParams는 현재 URL의 쿼리 파라미터를 가져오는 훅입니다.
  const [queryParams] = useSearchParams()
// queryParams를 통해 parameter를 추출
// The first item (queryParams) is a URLSearchParams object, 
// which lets you read the current query string
//  (e.g., ?page=2&size=10).
// You can use queryParams.get('page') to get the value
//  of the page parameter.
  const page = getParam(queryParams.get('page'), 1)
  const size = getParam(queryParams.get('size'), 10)
  // createSearchParams를 사용하여 쿼리 파라미터를 생성합니다.
  // toString() 메서드를 사용하여 URL의 parameters를 문자열로 변환합니다.
  // 이 문자열은 page와 size, &, ?를 포함합니다.
  const queryDefault = createSearchParams({ page, size }).toString()
 
  // url page, size 파라메터 이동시킴.
  const moveToList = (pageParam) => {
    // 초기값 if, for문에 사용하는 변수 선언 안하면 에러남.
    let queryStr = ""
    // pageParam이 존재하면 해당 파라미터를 사용하여 쿼리 문자열을 생성합니다.
    // pageParam이 없으면 기본값을 사용합니다.
    // if pageParam's value is { page: 2, size: 20 },
    //  is the pageParam equal to true?
    // Yes, if pageParam is { page: 2, size: 20 }, 
    // then if (pageParam) will evaluate to true.
// In JavaScript, any non-null, non-undefined object
//  (including { page: 2, size: 20 }) is considered truthy.
    if (pageParam) {
      // 위의 변수 page, size랑 다른거임. 위에는 url에서 가져오는 parameter
      // 아래는 함수의 매개변수로 넘어온 pageParam에서 page와
      // size를 가져오는 것임.
      const pageNum = getParam(pageParam.page, 1)
      const sizeNum = getParam(pageParam.size, 10)
      queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString()
    } else {
      queryStr = queryDefault
    }
// the search property sets the query string part of the URL
//  (the part after the ?).
// For example, if queryStr is "page=2&size=10",
// the navigation will go to: ../notice?page=2&size=10
// So, search is used to add or update query parameters in the URL.
    navigate({ pathname: '../notice', search: queryStr })
  }

  const moveToModify = (id) => {
    console.log(queryDefault)
    navigate({
      pathname: `../notice/modify/${id}`,
      // queryDefault는 page, size가 포함된 URL의 parameters임.
      // 이걸로 이동하면 page, size가 유지됨. 수정시 기존 페이지로 갈려고 만듬.
      search: queryDefault 
    })
  }

  // moveToList 함수는 페이지와 크기를 매개변수로 받아서,
  // page, size는 URL의 parameters에서 받음.
  // 이 return 값은 다른 컴포넌트에서 소환될 수 있음. 포켓몬임.
   return { moveToList, page, size, moveToModify };

}

export default CustomMove;