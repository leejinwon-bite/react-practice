import axios from 'axios'

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/board`;

// id가 매개임.
export const getBoardDTO = async (id) => {
  // server RestController에 있는 상대경로와 같음.
  const result = await axios.get(`${prefix}/${id}`)
  // server RestController에서 return되는 애들이 data임.
  return result.data;
}
