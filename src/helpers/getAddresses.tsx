import { TOKEN } from '../constants/TOKEN';

const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = TOKEN;

function getAddresses(query: string) {
  const options: { [key: string]: string | { [key2: string]: string } } = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: query, count: 20 }),
  };

  return fetch(url, options);
}

export default getAddresses;
