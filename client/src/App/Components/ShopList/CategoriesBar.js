import React from 'react';
import { Row, Col } from 'antd';

const CategoriesBar = ({ handleCategories }) => {
  return (
    <div className="categoriesbar">
      <Row>
          <Col>
            <h2 onClick={handleCategories}>Electronics</h2>
          </Col>
      </Row>
    </div>
  )
}

export default CategoriesBar
