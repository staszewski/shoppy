import React from 'react';

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
        </div>
    </div>
  )
}


export default TopBar

