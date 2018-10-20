import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';

const SearchBars = () => {
  return (
    <div className="searchbars">
      <Row>
        <Col xs={24} lg={10}>
          <Input placeholder="What are you looking for today?" id="searchbars__item"/>
        </Col>
        <Col xs={12} lg={10}>
        <Input placeholder="Location" id="searchbars__location"/>
        </Col>
        <Col xs={6} lg={2}>
          <div className="searchbars__buttoncontainer">
            <Button type="primary" block id="searchbars__search">Search</Button>
          </div>
        </Col>
        <Col xs={6} lg={2}>
        <div className="searchbars__buttoncontainer">        
          <Button type="primary" block id="searchbars__more">More</Button>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBars
