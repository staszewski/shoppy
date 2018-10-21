import React, { Component } from 'react';
import { Card } from 'antd';
import SearchBars from './SearchBars'

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
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];
		
		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.data;

      newList = currentList.filter(item => {
        return item.productName.toLowerCase().includes(e.target.value.toLowerCase());
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.data;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    console.log(this.state.filtered)
    return (
      <div>
        <SearchBars handleChange={this.handleChange}/>
        {
          this.state.filtered.map((el => {
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
      </div>
    )
  }
}



