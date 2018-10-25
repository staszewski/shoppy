import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const CategoriesBar = ({ handleCategories }) => {
  return (
    <div className="categoriesbar">
      <Row>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Toys"><img src="./Images/toy.svg"/>Toys</Link>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Cars"><img src="./Images/car.svg" />Cars</Link>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Property"><img src="./Images/property.svg" />Property</Link>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Electronics"><img src="./Images/electronics.svg" />Electronics</Link>
          </div>
          </Col>
      </Row>      
    </div>
  )
}

export default CategoriesBar
