import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const CategoriesBar = () => {
  return (
    <div className="categoriesbar">
      <Row>
          <Col xs={0} md={12} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Toys"><img src="../Images/toy.svg" alt="Toys category"/>Toys</Link>
          </div>
          </Col>
          <Col xs={0} md={12} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Cars"><img src="../Images/car.svg" alt="Cars category"/>Cars</Link>
          </div>
          </Col>
          <Col xs={0} md={12} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Property"><img src="../Images/property.svg" alt="Property category"/>Property</Link>
          </div>
          </Col>
          <Col xs={0} md={12} xl={6}>
          <div className="categoriesbar__categories">
            <Link to="/Electronics"><img src="../Images/electronics.svg" alt="Electronics category"/>Electronics</Link>
          </div>
          </Col>
      </Row>      
    </div>
  )
}

export default CategoriesBar
