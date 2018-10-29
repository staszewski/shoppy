import React, { Component } from 'react';
import axios from 'axios';


export default class ItemInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: []
      }
    }
    
    componentDidMount = () => {
        axios.get(`/item/${this.props.match.params.id}`)
            .then(res => {
                const data = res.data;
                this.setState({
                    data,
                    fetched: true
                })
            })
    }
    
  render() {
      console.log(this.state.data)
    return (
      <div>
        
      </div>
    )
  }
}



