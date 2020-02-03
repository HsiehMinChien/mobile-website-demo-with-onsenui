import { get, } from 'lodash';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export function getPokemonNames(setData: (data: any) => void, offset: number = 0) {
  const url = `${baseUrl}?offset=${offset}&limit=20`;
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
      const data = path ? get(res, path) : res;
      setDataCallback(data);
    })
    .catch((error) => {
      // Print out error message
      console.error(error)
    });
}

export function convertFirstAlphabetToUpperCase(value: string) {
  if (value.length === 0 || typeof value !== 'string') {
    return value;
  }
  return value.substring(0, 1).toUpperCase() + value.substring(1);
}