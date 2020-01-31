import { get, } from 'lodash';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export function getPokemonNames(setData: (data: any) => void) {
  const url = baseUrl;
  return getDatas(url, setData, 'results');
}

export function getPokemonDetail(url: string, setData: (data: any) => void) {
  return getDatas(url, setData);
}

function getDatas(url: string, setDataCallback: (data: any) => void, path?: string) {
  fetch(url, { method: 'GET', })
    .then((response) => {
      // ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((res) => {
      // Set data
      console.log(res);
      const data = path ? get(res, path) : res;
      setDataCallback(data);
    })
    .catch((error) => {
      // Print out error message
      console.error(error)
    });
}