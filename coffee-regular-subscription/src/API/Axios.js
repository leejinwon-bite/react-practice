import axios from 'axios'

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/board`;

// id가 매개임.
// 게시글 상세보기 누르면 작동하는 함수임.
export const getBoardDTO = async (id) => {
  // server RestController에 있는 상대경로와 같음.
  const result = await axios.get(`${prefix}/${id}`)
  console.log("getBoardDTO result =", result.data);
  // server RestController에서 return되는 애들이 data임.
  return result.data;
}

// 공지사항 누르면 작동하는 페이징 함수임.
export const getPaging = async (pageParam) => {
  // url의 parameters에서 온 애들임.
    const { page, size } = pageParam
  const result = await axios.get(`${prefix}/list`, { params: {page, size} });
  console.log("data 출력 =", result.data);
  return result.data
}

// 게시글을 작성할때 작동하는 함수임.
export const saveBoard = async (board) => {
  const result = await axios.post(
    `${prefix}/save`, board 
  );
  return result.data;
}

export const modifyBoard = async (board) => {
  const result = await axios.put(
    `${prefix}/${board.id}`, board
  );
  return result.data;
} 

export const deleteBoard = async (id) => {
  const result = await axios.delete(
    `${prefix}/${id}`);
    return result.data;
}
