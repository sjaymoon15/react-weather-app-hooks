import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

import {
  LINE_COLOR_HUMIDITY,
  LINE_COLOR_PRESSURE,
  LINE_COLOR_TEMP,
} from '../utils/constants';

const Weather = ({ list }) => {
  return (
    <ResponsiveContainer width='100%' aspect={2} data-test='component-weather'>
      <LineChart data={list} margin={{ bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='dt_txt' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          dataKey='main.pressure'
          stroke={LINE_COLOR_PRESSURE}
          name='Pressure (hPa)'
        />
        <Line
          dataKey='main.humidity'
          stroke={LINE_COLOR_HUMIDITY}
          name='Humidity (%)'
        />
        <Line
          dataKey='main.temp'
          stroke={LINE_COLOR_TEMP}
          name='Temperature (F)'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Weather;
