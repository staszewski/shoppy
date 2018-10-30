import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd';



export default class More extends Component {

  render() {
    return (
        <div className="more">
        {this.props.fetched ?
        <div className="more__content">
        <Row>
          <Col xs={24} md={20} lg={14}>
            <img className="more__image" src={this.props.data[0].product.img} alt=""/>          
          </Col>
          <Col xs={24} lg={14}>
            <div className="more__text">
              <h1 className="more__productname">{this.props.data[0].product.name}</h1>     
            </div>
          </Col>
          <Col xs={12}>
                <Icon type="tool" theme="outlined" />Condition: {this.props.data[0].product.condition}
          </Col>
          <Col xs={12}>
                <Icon type="tags" theme="outlined" /> Category: {this.props.data[0].product.category}
          </Col>
        </Row>
        </div>
        :
        null}
      </div>
    )
  }
}

