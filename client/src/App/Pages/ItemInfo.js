import React, { Component } from 'react';
import axios from 'axios';
import TopBar from '../Components/TopBar/TopBar';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/TopBar/SideBar';
import More from '../Components/ItemInfo/More';


export default class ItemInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: []
      }
    }
    
    componentDidMount = () => {
        axios.get(`/api/item/${this.props.match.params.id}`)
            .then(res => {
                const data = res.data;
                this.setState({
                    data,
                    fetched: true
                })
            })
    }
    
  render() {
    return (
      <div className="App">
      <SideBar pageWrapId={"mainpage"} outerContainerId={"MainPage"} />
      <div id="mainpage">
          <TopBar />
          <More data={this.state.data} fetched={this.state.fetched}/>
          <Footer />            
      </div>
  </div>
    )
  }
}



