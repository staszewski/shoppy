import React from 'react';
import { Card } from 'antd';

const Shoplist = ({ data, fetched}) => {
  let dataToMap = null;
  if (fetched === true) {
    dataToMap = data.map((el => {
      return (
        <Card
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>{el.productName}</p>
      </Card>
      )
    }))
  }
  return (
    <div>
      {dataToMap}
    </div>
  )
}

export default Shoplist;
