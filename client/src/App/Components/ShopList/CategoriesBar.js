import React from 'react';
import { Row, Col } from 'antd';

const CategoriesBar = ({ handleCategories }) => {
  return (
    <div className="categoriesbar">
      <Row>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <h2 onClick={handleCategories}><img src="Images/electronics.svg" className="categoriesbar__electronics" alt="logo"/>Electronics</h2>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <h2 onClick={handleCategories}><img src="Images/toy.svg" className="categoriesbar__electronics" alt="logo"/>Toys</h2>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <h2 onClick={handleCategories}><img src="Images/electronics.svg" className="categoriesbar__electronics" alt="logo"/>Electronics</h2>
          </div>
          </Col>
          <Col xs={0} md={12} lg={8} xl={6}>
          <div className="categoriesbar__categories">
            <h2 onClick={handleCategories}><img src="Images/electronics.svg" className="categoriesbar__electronics" alt="logo"/>Electronics</h2>
          </div>
          </Col>
      </Row>      
    </div>
  )
}

export default CategoriesBar
