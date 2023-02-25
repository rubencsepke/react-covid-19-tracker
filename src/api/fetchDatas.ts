export const fetchDatas = async (params: string) => {

  const resp = await fetch(import.meta.env.VITE_API_URL + params);
  return await resp.json();

}