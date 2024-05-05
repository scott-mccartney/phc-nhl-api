import { Boxscore } from '../models';
import { baseUrl } from './api.config';

/**
 * Retrieve the Boxscore details, including the game metadata, venue & broadcast info, and player statistics.
 * @param gameId the game ID in the format '2023020001'
 * @returns the {@type Boxscore} with statistics
 */
export const getBoxscore = async (
  gameId: number | string
): Promise<Boxscore> => {
  const response = await fetch(`${baseUrl}/gamecenter/${gameId}/boxscore`);

  if (response.status !== 200) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};
