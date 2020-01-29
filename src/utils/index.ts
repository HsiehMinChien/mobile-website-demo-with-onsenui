export function getPokemonNames(setData: (data: any) => void) {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  return getDatas(url, setData);
}

function getDatas(url: string, setDataCallback: (data: any) => void) {
  fetch(url, { method: 'GET', })
    .then((response) => {
      // ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((res) => {
      // Set data
      setDataCallback(res.results);
    })
    .catch((error) => {
      // Print out error message
      console.error(error)
    });
}