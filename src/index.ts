import { Boxscore } from './models';

const baseUrl = 'https://api-web.nhle.com/v1';

export const getBoxscore = async (
  gameId: number | string
): Promise<Boxscore> => {
  const response = await fetch(`${baseUrl}/gamecenter/${gameId}/boxscore`);

  if (response.status !== 200) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

export * from './models';
