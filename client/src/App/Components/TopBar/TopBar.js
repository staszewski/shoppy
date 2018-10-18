import React from 'react';
import Button from 'antd/lib/button';

const TopBar = () => {
  return (
    <div className="topbar">
        <div className="topbar__logocontainer">
            <img src="Images/store.svg" className="topbar__logo" alt="logo"/>
            <div className="topbar__logotext">
              <p>Shoppy</p>
            </div>
        </div>
        <div className="topbar__user">
          <img src="Images/user.svg" className="topbar__useravatar" alt="logo"/>
          <p>Dashboard</p>
          <Button type="primary" size="large">Post an item</Button>
        </div>
    </div>
  )
}


export default TopBar

