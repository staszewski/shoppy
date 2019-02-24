import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import SearchBars from './SearchBars';
import CategoriesBar from './CategoriesBar';

class ShopList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       filtered: [],
       filteredByCategory: []
    }
  }

  displayItems = () => {
    const { Meta } = Card;
    if(this.props.loading){
        return( <div>Loading books...</div> );
    } else {
        return this.props.data.items.map(item => {
            return(
              <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
              <Card
                title={item.name}
                extra={<a href={`/item/${item.id}`}>More</a>}
                style={{ width: `100%` }}
                cover={<div className="shoplist__card">
                <img alt="" src={item.image} />
                </div>
                }
              > 
                  <Meta
                    title={item.price}
                  />
              </Card>
            </Col>
            );
        })
    }
}

  componentDidMount = () => {
      this.setState({
        filtered: this.props.data
      })
  }

  render() {
    return (
      <div>
        <SearchBars 
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          searchValue={this.props.searchValue}
          disable={this.props.disable}/>
        <CategoriesBar handleCategories={this.handleCategories}/>
        <Row>
        { this.displayItems() }
        </Row>
      </div>
    )
  }
}

export default ShopList;



