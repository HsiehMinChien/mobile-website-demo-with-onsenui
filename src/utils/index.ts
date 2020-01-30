const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export function getPokemonNames(setData: (data: any) => void) {
  const url = baseUrl;
  return getDatas(url, setData, false);
}

export function getPokemonDetail(url: string, setData: (data: any) => void) {
  return getDatas(url, setData, true);
}

function getDatas(url: string, setDataCallback: (data: any) => void, isDetail: boolean) {
  fetch(url, { method: 'GET', })
    .then((response) => {
      // ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((res) => {
      // Set data
      console.log(res);
      const data = isDetail ? res : res.results;
      setDataCallback(data);
    })
    .catch((error) => {
      // Print out error message
      console.error(error)
    });
}