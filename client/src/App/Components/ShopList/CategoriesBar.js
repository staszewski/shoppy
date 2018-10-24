import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const CategoriesBar = ({ handleCategories }) => {
  return (
    <div className="categoriesbar">
      <Row>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Toys">Toys</Link>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            Link
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            Link
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Electronics">Electronics</Link>
          </div>
          </Col>
      </Row>      
    </div>
  )
}

export default CategoriesBar
