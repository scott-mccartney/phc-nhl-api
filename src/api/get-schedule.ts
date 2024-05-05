import { Schedule } from '../models/schedule';
import { baseUrl } from './api.config';

/**
 *
 * @param date
 * @returns
 */
export const getSchedule = async (date?: string): Promise<Schedule> => {
  const response = await fetch(`${baseUrl}/schedule/${date || 'now'}`);

  if (response.status !== 200) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};
