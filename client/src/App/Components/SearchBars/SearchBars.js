import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';

const SearchBars = () => {
  return (
    <Row>
      <Col xs={24} lg={8} >
        <Input placeholder="What are you looking for today?" id="searchbars__item"/>
      </Col>
      <Col xs={10} lg={8}>
        <Input placeholder="Location" id="searchbars__location"/>
      </Col>
      <Col xs={8} lg={4}>
        <Button type="primary" id="searchbars__confirm">Post an item</Button>
      </Col>
    </Row>
  )
}

export default SearchBars
