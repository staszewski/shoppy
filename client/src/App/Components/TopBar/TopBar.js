import React from 'react';
import { Row, Col } from 'antd';
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const TopBar = () => {
  return (
    <div className="topbar">
      <Row>
        <Col xs={24} md={14} lg={16} xl={20}>
        <div className="topbar__logocontainer">
            <img src="Images/store.svg" className="topbar__logo" alt="logo"/>
            <Link to="/">Shoppy</Link>
        </div>
        </Col>
        <Col xs={0} md={10} lg={8} xl={4}>
        <div className="topbar__user">
		
          <img src="Images/user.svg" className="topbar__useravatar" alt="logo"/>
          <p>Dashboard</p>
          <Button type="primary" ghost>Log in</Button>
        </div>
        </Col>
		<Col>
			<button class="hamburger hamburger--collapse" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</Col>
      </Row>
    </div>
  )
}


export default TopBar

