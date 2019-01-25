import React from 'react';
import { Icon } from 'antd';

export const trendSettings = {
  uptrend: {
    color: 'rgb(91,195,76)',
    icon: <Icon type="rise" />,
  },
  downtrend: {
    color: 'rgb(242,104,95)',
    icon: <Icon type="fall" />,
  },
  flat: {
    color: 'grey',
    icon: null,
  },

};