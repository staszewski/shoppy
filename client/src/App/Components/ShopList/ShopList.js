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

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.data
    });
  }

  
	handleChange = (e) => {
    let currentList = [];
    let newList = [];
		
    if (e.target.value !== "") {
      currentList = this.props.data;

      newList = currentList.filter(item => {
        return item.product.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
    } else {
      newList = this.props.data;
    }

    this.setState({
      filtered: newList
    });
  }

 

  render() {
    const { Meta } = Card;
    return (
      <div>
        <SearchBars handleChange={this.handleChange}/>
        <CategoriesBar handleCategories={this.handleCategories}/>
        <Row>
        {
          this.state.filtered.map(((el, index) => {
            return (
                <Col xs={24} md={12} lg={8} xl={6} key={el.user.id}>
                  <Card
                    title={el.product.name}
                    extra={<a href="#">More</a>}
                    style={{ width: `100%` }}
                    cover={<div className="shoplist__card">
                    <img alt="example" src={el.product.img} />
                    </div>
                    }
                  > 
                      <Meta
                        title={el.product.price}
                        description={el.product.description}
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



