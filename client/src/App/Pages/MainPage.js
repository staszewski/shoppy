import React, { Component } from 'react';
import axios from 'axios';
import TopBar from '../Components/TopBar/TopBar';
import ShopList from '../Components/ShopList/ShopList';

export default class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            fetched: false
        }
    }

    componentDidMount = () => {
        axios.get('/api/data')
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
            <div className="mainpage">
                <TopBar />
                <ShopList data={this.state.data} fetched={this.state.fetched}/>            
            </div>

        )
    }
}