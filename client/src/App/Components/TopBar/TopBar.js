import React from 'react';
import { Row, Col } from 'antd';
import Button from 'antd/lib/button';

const TopBar = () => {
  return (
    <div className="topbar">
      <Row>
        <Col xs={24} lg={12}>
        <div className="topbar__logocontainer">
            <img src="Images/store.svg" className="topbar__logo" alt="logo"/>
            <p>Shoppy</p>
        </div>
        </Col>
        <Col xs={0} lg={12}>
        <div className="topbar__user">
          <img src="Images/user.svg" className="topbar__useravatar" alt="logo"/>
          <p>Dashboard</p>
          <Button type="primary">Post an item</Button>
        </div>
        </Col>
      </Row>
    </div>
  )
}


export default TopBar

