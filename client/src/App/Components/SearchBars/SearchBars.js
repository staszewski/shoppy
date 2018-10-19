import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

const SearchBars = () => {
  return (
    <div className="searchbars">
        <Input placeholder="What are you looking for today?" id="searchbars__item"/>
        <Input placeholder="Location" id="searchbars__location"/>
        <Button type="primary" size="small" id="searchbars__confirm">Post an item</Button>
    </div>
  )
}

export default SearchBars
