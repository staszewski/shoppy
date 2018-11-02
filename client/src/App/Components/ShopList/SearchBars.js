import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';

const SearchBars = ({ handleChange, handleSubmit }) => {
  return (
    <div className="searchbars">
      <Row>
        <Col xs={24} lg={9}>
          <Input size="large" placeholder="What are you looking for today?" id="searchbars__item" onChange={handleChange}/>
        </Col>
        <Col lg={1}>
        </Col>
        <Col xs={17} lg={9}>
        <Input size="large" placeholder="Location" id="searchbars__location"/>
        </Col>
        <Col lg={1}>
        </Col>
        <Col xs={7} lg={4}>
        <div className="searchbars__buttoncontainer">        
          <Button onClick={handleSubmit} size="large" type="primary" block id="searchbars__more"><Icon type="setting" theme="outlined" />Settings</Button>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBars;  
