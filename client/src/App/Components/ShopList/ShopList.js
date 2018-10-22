import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import SearchBars from './SearchBars';

export default class ShopList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       filtered: []
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
    return (
      <div>
        <SearchBars handleChange={this.handleChange}/>
        <Row>
        {
          this.state.filtered.map(((el, index) => {
            return (
                <Col xs={24} md={12} lg={8} xl={6} key={el.user.id}>
                  <Card
                    title={el.product.name}
                    extra={<a href="#">More</a>}
                    style={{ width: `100%` }}
                    cover={<img alt="example" src={el.product.img}
                     />}
                  > 
                    <p>{el.product.description}</p>
                    <br />
                    <p>Price: {el.product.price}</p>
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



