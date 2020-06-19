export const fetchDatas = async (params) => {

  const resp = await fetch(process.env.REACT_APP_API_URL + params);
  const data = await resp.json();

  return data;

}