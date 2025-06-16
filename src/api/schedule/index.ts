import { Schedule } from "../../models";
import { baseUrl } from "../api.config";

/**
 * Retrieve the Schedule for a given date. If none is provided, the
 * current week's schedule will be returned
 * @param date the date in 'YYYY-mm-dd' format
 * @returns the week's Schedule
 */
export const getSchedule = async (date?: string): Promise<Schedule> => {
    const datePath = date || 'now'
    const response = await fetch(`${baseUrl}/schedule/${datePath}`);

    if (response.status !== 200) {
        return Promise.reject(response.statusText);
    }
    return response.json();
};

/**
 * Retrieve the Schedule for the current week. 
 * @returns the current week's Schedule
 */
export const getCurrentSchedule = async (): Promise<Schedule> => {
    return getSchedule();
};