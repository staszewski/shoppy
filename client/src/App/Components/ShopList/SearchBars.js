import React from 'react';
import { Input, Button, Row, Col } from 'antd';


const SearchBars = ({ handleChange, handleSubmit, searchValue }) => {
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
          <Button size="large" type="primary" block id="searchbars__more" onClick={handleSubmit}><a href={`/itemsearch/${searchValue}`}>More</a></Button>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBars;
 