import React, { Component } from 'react';

import { Col, Row, Layout, List, Icon, Divider } from 'antd';
import moment from 'moment';

import { MetricCard } from '../../views/MetricItem';
import { dataSample } from '../../../utils/mocks/metrics';
import { metricSettings } from '../../../utils/mocks/metrics';

import logo from '../../../assets/img/logo.svg';
import './App.css';

const {
  Header,
  Content,
} = Layout;

const formats = {
  DAY: "MMM Do YYYY",
  MONTH: "MMM YYYY",
  WEEK_M: "MMM Do YYYY",
}

class App extends Component {
  render() {
    const percentageMetrics = dataSample.filter(metric => metric.valueType === 'PC');
    const seasonalMetrics = dataSample.filter(metric => metric.valueType !== 'PC');

    return (
      <div className="App">
        <Layout>
          <Header>
            <img src={logo} className="App-logo" alt="logo" />
            <span>
              INSIGHTS
            </span>

          </Header>
          <Content>
            <Divider orientation="left">
              <Icon type="bulb" /> INSIGHTS <small>for last 30 days</small>
            </Divider>
            <Row gutter={16} type="flex">
              {percentageMetrics.map( metric =>
                <Col key={metric.metric} sm={12} md={6  }>
                  <MetricCard {...metric} />
                </Col>
              )}
            </Row>
            <Divider orientation="left">
              <Icon type="calendar" /> SEASONAL
            </Divider>
            <Row gutter={16} type="flex">
            <List
              size="large"
              bordered
              dataSource={seasonalMetrics}
              renderItem={
                metric => (
                  <List.Item>
                    <Icon type="info-circle" />
                    <strong>
                      {moment(metric.value).format(formats[metric.valueType])}
                    </strong>
                    <span>
                    {metricSettings[metric.metric].label}
                    </span>
                  </List.Item>
                )
              }
            />
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
