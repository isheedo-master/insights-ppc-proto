import React from 'react';

import { metricSettings } from '../../../utils/mocks/metrics';
import { trendSettings } from '../../../utils/constants/trendSettings';
import { Card } from 'antd';

export default({metric, value}) => {
  const getTrend = (value, metric) => {
    if (value >= metricSettings[metric].green) {
      return "uptrend";
    } else if (value <= metricSettings[metric].red) {
      return "downtrend";
    } else {
      return "flat";
    }
  };

  return (
    <Card>
      <p>
        <strong
          style={{
            color: trendSettings[getTrend(value, metric)].color
          }}
        >
          <span className="valueNum">
            {value}
          </span>
          {trendSettings[getTrend(value, metric)].icon}
        </strong>
      </p>
      {metricSettings[metric].label}
    </Card>
  );
};
