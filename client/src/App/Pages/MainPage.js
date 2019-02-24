import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getItemsQuery } from '../Queries/queries';
import TopBar from '../Components/TopBar/TopBar';
import ShopList from '../Components/ShopList/ShopList';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/TopBar/SideBar';


class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            searchValue: '',
            fetched: false,
            disable: true
        }
    }

    

    render() {
        console.log(this.props)
        return ( 
            <div className="App">
                <SideBar pageWrapId={"mainpage"} outerContainerId={"MainPage"} />
                <div id="mainpage">
                    <TopBar />
                    <ShopList 
                        data={this.props.data}
                        loading={this.props.data.loading} 
                        fetched={this.state.fetched}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        searchValue={this.state.searchValue}
                        disable={this.state.disable}/>
                    <Footer />            
                </div>
            </div>

        )
    }
}

export default graphql(getItemsQuery)(MainPage);