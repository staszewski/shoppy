import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import SearchBars from './SearchBars';
import CategoriesBar from './CategoriesBar';

export default class ShopList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       filtered: [],
       filteredByCategory: []
    }
  }

  componentDidMount = () => {
      this.setState({
        filtered: this.props.data
      })
  }

  render() {
    const { Meta } = Card;
    return (
      <div>
        <SearchBars 
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          searchValue={this.props.searchValue}/>
        <CategoriesBar handleCategories={this.handleCategories}/>
        <Row>
        {
          this.props.data.map(((el, index) => {
            return (
                <Col xs={24} md={12} lg={8} xl={6} key={el.user.id}>
                  <Card
                    title={el.product.name}
                    extra={<a href={`/item/${el.product.id}`}>More</a>}
                    style={{ width: `100%` }}
                    cover={<div className="shoplist__card">
                    <img alt="" src={el.product.img} />
                    </div>
                    }
                  > 
                      <Meta
                        title={el.product.price}
                      />
                  </Card>
                </Col>
            )
          }))
        }
        </Row>
      </div>
    )
  }
}



