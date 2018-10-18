import React from 'react';
import Input from 'antd/lib/input';

const SearchBars = () => {
  return (
    <div className="searchbars">
        <Input placeholder="What are you looking for today?" id="searchbars__item"/>
        <Input placeholder="Location" id="searchbars__location"/>
    </div>
  )
}

export default SearchBars
