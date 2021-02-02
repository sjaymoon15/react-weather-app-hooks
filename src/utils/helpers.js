import { WEATHER_API_ROOT_URL } from './constants';
import axios from 'axios';

export const fetchWeathers = (searchQuery) => {
  const url = `${WEATHER_API_ROOT_URL}&q=${searchQuery}`;
  return axios.get(url);
};
