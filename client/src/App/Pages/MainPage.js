import React, { Component } from 'react';
import axios from 'axios';
import TopBar from '../Components/TopBar/TopBar';
import SearchBars from '../Components/SearchBars/SearchBars';
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
                <SearchBars />
                <ShopList data={this.state.data} fetched={this.state.fetched}/>            
            </div>

        )
    }
}