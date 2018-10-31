import React, { Component } from 'react'
import { Row, Col, Icon, Card, Button } from 'antd';



export default class More extends Component {

  render() {
    return (
        <div className="more">
        {this.props.fetched ?
        <div className="more__content">
        <Row>
          <Col xs={24} lg={14} xl={12}>
            <img className="more__image" src={this.props.data[0].product.img} alt=""/>          
          </Col>
          <Col xs={0} lg={10} xl={12}>
          <div className="more__card">
            <Card
            style={{ width: `100%` }}
            >
                      <Col lg={24}>
            <div className="more__text">
              <h1 className="more__productname">
              {this.props.data[0].product.name}
              <br />
              {this.props.data[0].product.price}
              </h1>     
            </div>
          </Col>
          <Col lg={8}>
                <Icon type="tool" theme="outlined" /> Condition: {this.props.data[0].product.condition}
          </Col>
          <Col lg={8}>
                <Icon type="tags" theme="outlined" /> Category: {this.props.data[0].product.category}
          </Col>
          <Col lg={8}>
          <Icon type="home" theme="outlined" /> Category {this.props.data[0].user.location}
          </Col>
          <Col lg={24}>
            <p className="more__description">
              {this.props.data[0].product.description}
            </p>
          </Col>
            </Card>
          </div>
          </Col>
          <Col xs={24} lg={0}>
            <div className="more__text">
              <h1 className="more__productname">
              {this.props.data[0].product.name}
              <br />
              {this.props.data[0].product.price}
              </h1>     
            </div>
          </Col>
          <Col xs={24} lg={0}>
                <Icon type="tool" theme="outlined" />Condition: {this.props.data[0].product.condition}
          </Col>
          <Col xs={24} lg={0}>
                <Icon type="tags" theme="outlined" /> Category: {this.props.data[0].product.category}
          </Col>
          <Col xs={24} lg={0}>
          <Icon type="home" theme="outlined" /> Category {this.props.data[0].user.location}
          </Col>
          <Col xs={24} lg={0}>
            <p className="more__description">
              {this.props.data[0].product.description}
            </p>
          </Col>
        </Row>
        </div>
        :
        null}
      </div>
    )
  }
}

