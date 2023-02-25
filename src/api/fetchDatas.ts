export const fetchDatas = async (params) => {

  const resp = await fetch(import.meta.env.VITE_API_URL + params);
  const data = await resp.json();

  return data;

}