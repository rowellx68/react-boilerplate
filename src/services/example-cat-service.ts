import { get } from 'utilities/http-client';

export interface ICatFact {
  fact: string;
  length: number;
}

export async function getCatFact(): Promise<ICatFact> {
  const response = await get('https://catfact.ninja/fact');

  if (!response.ok) {
    return Promise.reject();
  }

  return await response.json();
}

// this is call will be proxied by the dev server to your locally running API
export async function getCatFactLocal(): Promise<ICatFact> {
  const response = await get('/api/fact');

  if (!response.ok) {
    return Promise.reject();
  }

  return await response.json();
}
